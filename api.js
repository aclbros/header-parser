var express = require("express");

var router = express.Router();

// main page
router.get('/', function (req, res){
    res.send({
        ipaddress: req.headers['x-forwarded-for'],
        language: req.get('Accept-Language'),
        software: req.get('user-agent').match(/\(.+\)/)[0].slice(1, -1)
    });
});

module.exports = router;