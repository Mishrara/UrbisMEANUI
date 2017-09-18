var express = require('express');
var app = express();
var router = express.Router();
var db = require('./database');

router.get('/dropdown/STNS', function (req, res) {
    // create Request object
    var request = new db.request();
    // query to the database and get the records
    request.query('select * from URBIS.STNS', function (err, recordset) {
        
        if (err) console.log(err);

        // send records as a response
        res.send(recordset);
        
    });
});

router.get('/dropdown/PRODTYPE', function (req, res) {
    // create Request object
    var request = new db.request();
    // query to the database and get the records
    request.query("select PROD_NAME,PROD_TYPE from URBIS.PRTPO WHERE PROD_GROUP LIKE '%CP%'", function (err, recordset) {
        
        if (err) console.log(err);

        // send records as a response
        res.send(recordset);
        
    });
});

 module.exports = router;