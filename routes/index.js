var express = require('express');
var router = express.Router();

router
    .route('/json')
    .get(function(req, res) {
        console.log('GET json');
        res
            .status(200)
            .json({ "jsonData": "GET received" });
    })
    .post(function(req, res) {
        console.log('POST json');
        res
            .status(200)
            .json({ "jsonData": "POST received" });
    });

module.exports = router;