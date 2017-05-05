var express = require('express');
var router = express.Router()

//finish logout function
router.post('/logout', (req, res) => {
    //if user exist in sessions, remove from sessions,
    //otherwise redirect or something 
})

module.exports = router;