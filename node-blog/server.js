const express = require('express');
const bodyParser = require('body-parser');
//const MongoClient = require('mongodb').MongoClient
const MongoClient = require('mongodb'),
    assert = require('assert');
const app=express();
const cors = require('cors')
const config= require('./config')
var bcrypt = require('bcrypt')

app.use(cors())
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: true}))

var db;
var post_collection;
var user_collection;
var comment_collection;
const saltRounds = 10;

MongoClient.connect(config.dburl, (err, database) => {
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

app.get('/getposts', (req, res) => {
  post_collection.find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    console.log(result)
    res.send(result)
  })
})

app.post('/newPost', (req, res) => {
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

app.post('/deletePost/:id', (req, res) => {
  //convert submit string id to ObjectID
  deleteId = new MongoClient.ObjectID(req.params.id);
  console.log(deleteId);


  post_collection.deleteOne({'_id':deleteId}, (err, result) => {
    console.log(result);
    assert.equal(null, err);
    //assert.equal(1, result.deletedCount);
    //assert.equal is causing errors for me
  })
})

app.post('/login', (req, res) => {

  user_collection.findOne({'email':req.body.email}, (err, result) =>{
    console.log(result)
    bcrypt.compare(req.body.password, result.password, function(err, res) {
      //here I will start a new session
      console.log(res)
      if(err) console.log(err)
    }); 
    if(err) console.log(err)
    console.log(result)


  })
  console.log(req.body)
  
})

app.post('/register', (req, res) => {
  var email = req.body.email
  var username = req.body.username
  bcrypt.genSalt(saltRounds, (err,salt) => {
    bcrypt.hash(req.body.password, salt, (err,hash) => {
      console.log(hash);
      db.collection('user-collection')
      .insertOne({
                  'email': email,
                  'username': username,
                  'password': hash
                }, 
      (err,result) =>{
          console.log(result)
      })
    })
  })
})