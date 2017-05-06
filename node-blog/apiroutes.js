var express = require('express')
var router = express.Router()


router.get('/getposts', (req, res) => {
    post_collection = req.app.locals.post_collection;
    //console.log(req);
    post_collection.find().toArray((err, result) => {
        if (err) return console.log(err)

        // renders index.ejs
        //console.log(result)
        res.send(result);
    });
});

router.post('/newPost', (req, res) => {
    post_collection = req.app.locals.post_collection;
    console.log(req.headers.authorization)

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

module.exports = router;