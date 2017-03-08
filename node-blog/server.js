var logger          = require('morgan'),
    cors            = require('cors'),
    http            = require('http'),
    express         = require('express'),
    errorhandler    = require('errorhandler'),
    cors            = require('cors'),
    dotenv          = require('dotenv'),
    bodyParser      = require('body-parser'),
    bcrypt          = require('bcrypt'),
    MongoClient     = require('mongodb'),
    //assert          = require('assert')
    _               = require('lodash'),
    config          = require('./config'),
    dbconfig        = require('./dbconfig'),
    jwt             = require('jsonwebtoken'),
    jwtChecker      = require('express-jwt')

var db,
    post_collection,
    user_collection,
    comment_collection

const saltRounds = 10;

var app = express();

dotenv.load();

MongoClient.connect(dbconfig.dburl, (err, database) => {
  if (err) return console.log(err)
  //connect to mongodb if errors raise errors, if not start the app
  db=database

  post_collection =  db.collection('post-collection');
  user_collection = db.collection('user-collection');
  comment_collection = db.collection('comment-collection');

  app.listen(3000, () => {
      console.log('listening on 3000')
  })
})

// Parsers
// old version of line
// app.use(bodyParser.urlencoded());
// new version of line
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var jwtCheck = jwtChecker({
  secret: config.secret,
  getToken:
    function fromHeaderOrQuerystring (req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.Authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
        return req.query.token;
        }
        return null;
    } 
});

app.use('/api/protected', jwtCheck);


//add protection
app.post('/api/protected/newPost', (req, res) => {
  
  console.log(req)
  post_collection.save(req.body, (err,result)=> {
    if (err) return console.log(err)
    console.log('saved to database')
    res.send("Success");
    //res.redirect('/')
  })
  //req.body is handle by bodyParser
  console.log(req.body)
  console.log('Hellooooooooooooooooo!')
})

app.post('/api/protected/deletePost', (req, res) => {
  //convert submit string id to ObjectID
  deleteId = new MongoClient.ObjectID(req.body.deleteId);
  console.log(req.headers)
  //deleteId = new MongoClient.ObjectID(req.params.id);
  console.log(deleteId);


  post_collection.deleteOne({'_id':deleteId}, (err, result) => {
    console.log(result);
    if(err) console.log(err);
    console.log("Success");
    //assert.equal(null, err);
    //assert.equal(1, result.deletedCount);
    //assert.equal is causing errors for me
  });
});

app.get('/getposts', (req, res) => {
  post_collection.find().toArray((err, result) => {
    if (err) return console.log(err)
    
    // renders index.ejs
    //console.log(result)
    res.send(result)
  })
})

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
  app.use(errorhandler())
}

var port = process.env.PORT || 3001;


/**************************\
*   User session handle    *
\**************************/



var users = user_collection

function createToken(user) {
    return jwt.sign(_.omit(user, 'password'), config.secret, { expiresInMinutes: 60*5 });
}


function getUserScheme(req) {
    console.log(req.body);
    var email;
    var username;
    var type;
    var userSearch = {};

    if(req.body.email && req.body.username) {
        email = req.body.email;
        username = req.body.username;
        userSearch = { email: email,
                        username: username}
    }
    else if(req.body.email) {
        email = req.body.email;
        userSearch = { email: email };
    }

    console.log(userSearch);

    if(userSearch.username) {
        return {
            email: email,
            username: username,
            userSearch: userSearch
        }
    } else {
        return {
            email: email,
            userSearch: userSearch
        }
    }
}

/************ register ************/

app.post('/register', function(req, res) {
    var userScheme = getUserScheme(req);

    var newUser;

    user_collection.findOne({'email': userScheme.email}, (err,result) => {
        //console.log("**Searching For User***")
        console.log(result);
        if(err) console.log(err);
        if(result) {
            return res.status(400).send("Email already in use");
            
        } else {
            console.log("email ok");
            //return res.status(400).send("Email not found")
            user_collection.findOne({'username': userScheme.username}, (err,result) => {
                if(err) console.log(err);
                if(result) {
                    return res.status(400).send("Username " + userScheme.username + " already in use");;
                } else {
                    console.log("username ok");
                    bcrypt.genSalt(saltRounds, (err,salt) => {
                        bcrypt.hash(req.body.password, salt, (err,hash) => {
                        console.log(hash);
                        user_collection.insertOne({
                            'email': userScheme.email,
                            'username': userScheme.username,
                            'password': hash
                            }, (err,result) =>{
                                    if(err) console.log(error);
                                    console.log(result)
                                    res.status(201).send("Profile Successfully created.")
                                });
                        });
                    });
                }
            });
        }
    });
});




/********* login *********/
app.post('/login', function(req, res) {

    var userScheme = getUserScheme(req);
    console.log(userScheme);
  
    if (!userScheme.email || !req.body.password) {
        console.log(userScheme);
        console.log(req.body.password);
        return res.status(400).send("You must send the email and the password");
    }

    console.log(userScheme);
    var user;

    var serverRes = res;
    user_collection.findOne({'email': userScheme.email}, (err,result) => {
        console.log("**Searching For User***")
        console.log(result);
        if(err) console.log(err);
        var user = result;
        bcrypt.compare(req.body.password, user.password, function(err, res) {
            console.log("Password is "+ res)
            if(err) console.log(err)
            if(res) {
                serverRes.status(201).send({
                    id_token: createToken(user)
                });
            } else {
                return serverRes.status(401).send("The username or password don't match")
            }
        });
    })
});


//finish logout function
app.post('/logout',(req, res) => {
  //if user exist in sessions, remove from sessions,
  //otherwise redirect or something 
})
