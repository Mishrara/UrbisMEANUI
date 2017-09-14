//var config = require('config.json');
var express = require('express');
var router = express.Router();
var ldap = require('ldapjs');
var jwt = require('jsonwebtoken');
const config = require('../config/database');
const login = require('../models/login');
 
// routes
router.post('/authenticate',function (req, res,next) {
    let user = new login({
		domain: req.body.domain,
		userId: req.body.userId,
        password: req.body.password,
        token:'',
        otp:''
    });
    //connecting to ldap server 
    var client = ldap.createClient({url: 'ldap://ap.uis.unisys.com'});
    client.on('error', function(err) {
        console.warn('LDAP connection failed', err);
            });
    //authenticating the user
     var dn = user.userId +'@'+user.domain+'.uis.unisys.com';
     console.log(dn);
     client.bind(dn, user.password, function (err,resp) {
         console.log('error :' +err);
        // console.log(resp);
        if (err)
            {
                res.json({
                    success: false,
                    err:'Username or password is incorrect'});
                
            }

        else {
            // authentication successful
            var usrnme = user.userId;
            console.log(usrnme);
            var options = {
                'expiresIn': '2m'
                };
            var payload = { user:user.userId};
            var token = jwt.sign(payload, config.secret,options);
            //var token = jwt.sign(user.userId, config.secret, {
              //  expiresIn: '2m'  
            //});
            res.json({
                success: true,
                token: token
            });
            //console.log('token:' +token);
            user.token = token;
        }
        client.unbind();
        console.log('tok : '+ user.token);
        user.save ((err)=>{
            console.log("save sucess to db");
            console.log(err);
            //res.json({message : err});
        });
    });
    
   
  });
  module.exports = router;