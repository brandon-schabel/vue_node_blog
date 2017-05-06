/**************************\
*   User session handle    *
\**************************/
var MongoClient = require('mongodb').MongoClient;
var express = require('express'),
    jwt = require('jsonwebtoken'),
    jwtChecker = require('express-jwt'),
    _ = require('lodash')
var router = express.Router();
var bcrypt = require('bcrypt');
var config = require('./config.json');

//salt for bcrypt
const saltRounds = 10;

function createToken(user) {
    return jwt.sign(_.omit(user, 'password'), config.secret, { expiresIn: 6000 });
}

function getUserScheme(req) {
    console.log(req.body);
    var email;
    var username;
    var type;
    var userSearch = {};

    if (req.body.email && req.body.username) {
        email = req.body.email;
        username = req.body.username;
        userSearch = {
            email: email,
            username: username
        }
    } else if (req.body.email) {
        email = req.body.email;
        userSearch = { email: email };
    }

    console.log(userSearch);

    if (userSearch.username) {
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
router.post('/register', function(req, res) {

    user_collection = req.app.locals.user_collection;

    var userScheme = getUserScheme(req);

    var newUser;

    user_collection.findOne({ 'email': userScheme.email }, (err, result) => {
        //console.log("**Searching For User***")
        console.log(result);
        if (err) console.log(err);
        if (result) {
            return res.status(400).send("Email already in use");

        } else {
            console.log("email ok");
            //return res.status(400).send("Email not found")
            user_collection.findOne({ 'username': userScheme.username }, (err, result) => {
                if (err) console.log(err);
                if (result) {
                    return res.status(400).send("Username " + userScheme.username + " already in use");;
                } else {
                    console.log("username ok");
                    bcrypt.genSalt(saltRounds, (err, salt) => {
                        bcrypt.hash(req.body.password, salt, (err, hash) => {
                            console.log(hash);
                            user_collection.insertOne({
                                'email': userScheme.email,
                                'username': userScheme.username,
                                'password': hash
                            }, (err, result) => {
                                if (err) console.log(error);
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
router.post('/login', function(req, res) {
    //get user_collection by getting it from apps local variables
    user_collection = req.app.locals.user_collection;

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
    user_collection.findOne({ 'email': userScheme.email }, (err, result) => {
        console.log("**Searching For User***")
        console.log(result);
        if (err) console.log(err);
        var user = result;
        bcrypt.compare(req.body.password, user.password, function(err, res) {
            console.log("Password is " + res)
            if (err) console.log(err)
            if (res) {
                serverRes.status(201).send({
                    id_token: createToken(user),
                    email: user.email,
                    username: user.username,
                });
                //console.log(id_token)
            } else {
                return serverRes.status(401).send("The username or password don't match")
            }
        });
    })
});

module.exports = router;