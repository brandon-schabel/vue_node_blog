var logger = require('morgan'),
    cors = require('cors'),
    http = require('http'),
    express = require('express'),
    errorhandler = require('errorhandler'),
    dotenv = require('dotenv'),
    bodyParser = require('body-parser'),
    MongoClient = require('mongodb'),
    //assert          = require('assert')
    _ = require('lodash'),

    dbconfig = require('./dbconfig'),
    jwtDecode = require('jwt-decode');

//routing
var apiroutes = require('./apiroutes');
var apiprotected = require('./apiprotected');
var serverroutes = require('./serverroutes');
var auth = require('./auth');


var app = express();

dotenv.load();

MongoClient.connect(dbconfig.dburl, (err, db) => {
    if (err) return console.log(err)
        //connect to mongodb if errors raise errors, if not start the app
        //app.locals is local variables for the app
    app.locals.db = db;
    app.locals.post_collection = db.collection('post-collection');
    app.locals.user_collection = db.collection('user-collection');;
    app.locals.comment_collection = db.collection('comment-collection');
    app.listen(3000, () => {
        console.log('listening on 3000')
    });
});

// Parsers
// old version of line
// app.use(bodyParser.urlencoded());
// new version of line
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', apiroutes);
app.use('/api/protected', apiprotected);
app.use('/routes', serverroutes);
app.use('/auth', auth)

if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
    app.use(errorhandler())
}

var port = process.env.PORT || 3001;