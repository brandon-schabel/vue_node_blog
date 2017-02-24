const express = require('express');
const bodyParser = require('body-parser');
//const MongoClient = require('mongodb').MongoClient
const MongoClient = require('mongodb'),
    assert = require('assert');
const app=express();
const cors = require('cors')
const config= require('./config')

app.use(cors())
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: true}))

var db;

MongoClient.connect(config.dburl, (err, database) => {
  if (err) return console.log(err)
  //connect to mongodb if errors raise errors, if not start the app
  db=database
  app.listen(3000, () => {
      console.log('listening on 3000')
  })
})

app.get('/getposts', (req, res) => {
  db.collection('post-collection').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    console.log(result)
    res.send(result)
  })
})

app.post('/newPost', (req, res) => {
  console.log(req)
  db.collection('post-collection').save(req.body, (err,result)=> {
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
  console.log(req)
  deleteId = new MongoClient.ObjectID(req.params.id);
  console.log(deleteId);


  db.collection('post-collection').deleteOne({'_id':deleteId}, (err, result) => {
    console.log(result);
    assert.equal(null, err);
    assert.equal(1, result.deletedCount);
  })

  app.post('/login', (req, res) => {
    console.log(req.body)
  })
})
