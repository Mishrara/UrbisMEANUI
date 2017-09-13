var express = require('express');
var app = express();
var router = express.Router();
var db = require('./database');

router.get('/dropdown/STNS', function (req, res) {
    // create request object
    var request = new db.request();
    // query to the database and get the records
    request.query('select * from URBIS.STNS', function (err, recordset) {
        
        if (err) console.log(err);

        // send records as a response
        res.send(recordset);
        
    });
});

router.get('/dropdown/PRODTYPE', function (req, res) {
    // create request object
    var request = new db.request();
    // query to the database and get the records
    request.query("select PROD_NAME,PROD_TYPE from URBIS.PRTPO WHERE PROD_GROUP LIKE '%CP%'", function (err, recordset) {
        
        if (err) console.log(err);

        // send records as a response
        res.send(recordset);
        
    });
});

router.get('/dropdown/GLMaster', function (req, res) {
    // create request object
    var request = new db.request();
    // query to the database and get the records
    request.query("SELECT MASTER_NO FROM URBIS.GLMAM WHERE C_TYPE1 LIKE '%CP%'", function (err, recordset) {
        
        if (err) console.log(err);

        // send records as a response
        res.send(recordset);
        
    });
});

router.get('/dropdown/AccountingCentre', function (req, res) {
    // create request object
    var request = new db.request();
    // query to the database and get the records
    request.query("select BRANCH from URBIS.BRNCH", function (err, recordset) {
        
        if (err) console.log(err);

        // send records as a response
        res.send(recordset);
        
    });
});

router.get('/dropdown/DebitNarrativeCode', function (req, res) {
    // create request object
    var request = new db.request();
    // query to the database and get the records
    request.query("select DBTNARCDE from URBIS.GNARO WHERE TABLETYPE='ST'", function (err, recordset) {
        
        if (err) console.log(err);

        // send records as a response
        res.send(recordset);
        
    });
});

router.get('/dropdown/DebitCurrency', function (req, res) {
    // create request object
    var request = new db.request();
    // query to the database and get the records
    request.query("select CCY from URBIS.CCYS", function (err, recordset) {
        
        if (err) console.log(err);

        // send records as a response
        res.send(recordset);
        
    });
});

router.get('/dropdown/CreditNarrativeCode', function (req, res) {
    // create request object
    var request = new db.request();
    // query to the database and get the records
    request.query("select DBTNARCDE from URBIS.GNARO WHERE TABLETYPE='ST'", function (err, recordset) {
        
        if (err) console.log(err);

        // send records as a response
        res.send(recordset);
        
    });
});

router.get('/dropdown/CreditCurrency', function (req, res) {
    // create request object
    var request = new db.request();
    // query to the database and get the records
    request.query("select CCY from URBIS.CCYS", function (err, recordset) {
        
        if (err) console.log(err);

        // send records as a response
        res.send(recordset);
        
    });
});

router.get('/dropdown/DefaultAddress', function (req, res) {
    // create request object
    var request = new db.request();
    // query to the database and get the records
    request.query("select DBTNARCDE from URBIS.GNARO WHERE TABLETYPE='AT'", function (err, recordset) {
        
        if (err) console.log(err);

        // send records as a response
        res.send(recordset);
        
    });
});

router.get('/dropdown/ChargeCurrency', function (req, res) {
    // create request object
    var request = new db.request();
    // query to the database and get the records
    request.query("select CCY from URBIS.CCYS", function (err, recordset) {
        
        if (err) console.log(err);

        // send records as a response
        res.send(recordset);
        
    });
});

router.get('/dropdown/CommissionCurrency', function (req, res) {
    // create request object
    var request = new db.request();
    // query to the database and get the records
    request.query("select CCY from URBIS.CCYS", function (err, recordset) {
        
        if (err) console.log(err);

        // send records as a response
        res.send(recordset);
        
    });
});

router.get('/dropdown/HolidayOverride', function (req, res) {
    // create request object
    var request = new db.request();
    // query to the database and get the records
    request.query("SELECT CNTRY_CHK FROM URBIS.CNCHK", function (err, recordset) {
        
        if (err) console.log(err);

        // send records as a response
        res.send(recordset);
        
    });
});

 module.exports = router;