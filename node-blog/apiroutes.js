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

module.exports = router;