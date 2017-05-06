var express = require('express'),
    jwt = require('jsonwebtoken'),
    jwtChecker = require('express-jwt'),
    config = require('./config'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    http = require('http'),
    jwtDecode = require('jwt-decode'),
    MongoClient = require('mongodb')


var router = express.Router()


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(cors());

/*
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
};

router.use(allowCrossDomain);
*/

//var jwtCheck =
router.use(jwtChecker({
    secret: config.secret,

    getToken: function fromHeaderOrQuerystring(req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            console.log(req.headers.authorization.split(' ')[1])
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
            return req.query.token;
        }
        return null;
    }
}));

//if this was in the main app we'd define the route and tell it which function we want to use,
//instead we tell it which function and then later choose the route in the main server file
//app.use('/api/protected', jwtCheck);



router.post('/newPost', (req, res) => {
    post_collection = req.app.locals.post_collection;
    //console.log(req.headers.authorization)

    //console.log(req);
    var currentDateTime = new Date();
    var post = req.body;
    post.time = currentDateTime

    //console.log(post)
    //console.log(req.body) 
    post_collection.save(post, (err, result) => {
        if (err) return console.log(err)
        console.log('saved to database')
        res.send("Success");
        //res.redirect('/')
    });
    //req.body is handle by bodyParser
    //console.log(req.body)
    //console.log('Hellooooooooooooooooo!')
});

router.post('/deletePost', (req, res) => {
    console.log(req.user);
    //console.log(req.headers);
    //console.log(req.headers.authorization.split(' ')[1]);
    var token = req.headers.authorization.split(' ')[1];

    var decoded = jwtDecode(token);
    console.log(decoded);
    //console.log(req.headers.authorization);
    //console.log(req.headers)
    //console.log(req.body);
    post_collection.remove({ _id: MongoClient.ObjectID(req.body.id) }, (err, result) => {
        //console.log(result);
        if (err) console.log(err);
        console.log("Success");
    });
});

router.post('/profile', (req, res) => {
    console.log(req.headers);
    console.log(req.headers.authorization.split(' ')[1]);
    var token = req.headers.authorization.split(' ')[1];

    var decoded = jwtDecode(token);
    console.log(decoded);

    user_collection.findOne({ email: decoded.email, username: decoded.username }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.status(201).send(result);
        }
    })
})

// if we set the route for this file in the main app as /api/protected/,
// the full route for this would be /api/protected/updateProfile
router.post('/updateProfile', (req, res) => {
    console.log(req.body);
    console.log(req.headers);
    console.log(req.headers.authorization.split(' ')[1]);

    var userDataUpdate = req.body;
    var token = req.headers.authorization.split(' ')[1];
    var decoded = jwtDecode(token);

    console.log(decoded);


    user_collection.update({ email: decoded.email, username: decoded.username }, { $set: { profileData: req.body } }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.status(201).send("Profile successfully updated.")
        }
    })
})




module.exports = router;









/*
*****sample for reference******
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

// define the home page route
router.get('/', function(req, res) {
    res.send('Birds home page')
})


// define the about route
router.get('/about', function(req, res) {
    res.send('About birds')
})

module.exports = router; */