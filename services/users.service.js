//var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var ldap = require('ldapjs');
var mongo = require('mongoskin');
const config = require('../config/database');
var db = mongo.db(config.uri, { native_parser: true });
db.bind('users');
 
function authDN(dn, password, cb) {
    var client = ldap.createClient({url: 'ldap://ap.uis.unisys.com'});
     //console.log("in authdn" +  client);
    client.bind(dn, password, function (err,res) {
        if (err) {
            console.log(err);
          } else {
            console.log('sucess');
          }
          console.log("in pre bind res " +  res );
          console.log("in pre bind error " +  err );
      client.unbind();
     // console.log("in bind" +  client.connected + dn   );
      cb(err === null, err);
    });
  }
  
  
  function output(res, err) {
    if (res) {
      console.log('success');
    } else {
      console.log('failure');
    }
  }
  
  // should print "success"
  //authDN('cn=user', 'goodpasswd', output);
  // should print "failure"
  //authDN('cn=user', 'badpasswd', output);
//var client = ldap.createClient({
  //url: 'ldap://unisys.com',
  //timeout: 60*60,
  //connectTimeout: 60*60,
 // reconnect: true
//});
//client.on('error', function(err) {
  //  console.warn('LDAP connection failed, but fear not, it will reconnect OK', err);
//});
//console.log(client);
var service = {};
 
service.authenticate = authenticate;
service.getAll = getAll;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;
 
module.exports = service;
 
function authenticate(username, password) {
     var deferred = Q.defer();
     var client = ldap.createClient({url: 'ldap://ap.uis.unisys.com'});
      //db.users.findOne({ username: username }, function (err, user) {
        client.bind('thakrass@ap.uis.unisys.com', password, function (err,res) {
          if (err) deferred.reject(err.name + ': ' + err.message);
  
          if (err == null) {
              // authentication successful
              var token = jwt.sign(user, app.get('superSecret'), {
                expiresInMinutes: 1440 // expires in 24 hours
              });
            
          } else {
              // authentication failed
              deferred.resolve();
          }
      });
     
      client.unbind();
      res.json({
           token: token
      });
    }
 
function getAll() {
    var deferred = Q.defer();
 
    db.users.find().toArray(function (err, users) {
        if (err) deferred.reject(err.name + ': ' + err.message);
 
        // return users (without hashed passwords)
        users = _.map(users, function (user) {
            return _.omit(user, 'hash');
        });
 
        deferred.resolve(users);
    });
 
    return deferred.promise;
}
 
function getById(_id) {
    var deferred = Q.defer();
 
    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);
 
        if (user) {
            // return user (without hashed password)
            deferred.resolve(_.omit(user, 'hash'));
        } else {
            // user not found
            deferred.resolve();
        }
    });
 
    return deferred.promise;
}
 
function create(userParam) {
    var deferred = Q.defer();
 
    // validation
    db.users.findOne(
        { username: userParam.username },
        function (err, user) {
            if (err) deferred.reject(err.name + ': ' + err.message);
 
            if (user) {
                // username already exists
                deferred.reject('Username "' + userParam.username + '" is already taken');
            } else {
                createUser();
            }
        });
 
    function createUser() {
        // set user object to userParam without the cleartext password
        var user = _.omit(userParam, 'password');
 
        // add hashed password to user object
        user.hash = bcrypt.hashSync(userParam.password, 10);
 
        db.users.insert(
            user,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);
 
                deferred.resolve();
            });
    }
 
    return deferred.promise;
}
 
function update(_id, userParam) {
    var deferred = Q.defer();
 
    // validation
    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);
 
        if (user.username !== userParam.username) {
            // username has changed so check if the new username is already taken
            db.users.findOne(
                { username: userParam.username },
                function (err, user) {
                    if (err) deferred.reject(err.name + ': ' + err.message);
 
                    if (user) {
                        // username already exists
                        deferred.reject('Username "' + req.body.username + '" is already taken')
                    } else {
                        updateUser();
                    }
                });
        } else {
            updateUser();
        }
    });
 
    function updateUser() {
        // fields to update
        var set = {
            firstName: userParam.firstName,
            lastName: userParam.lastName,
            username: userParam.username,
        };
 
        // update password if it was entered
        if (userParam.password) {
            set.hash = bcrypt.hashSync(userParam.password, 10);
        }
 
        db.users.update(
            { _id: mongo.helper.toObjectID(_id) },
            { $set: set },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);
 
                deferred.resolve();
            });
    }
 
    return deferred.promise;
}
 
function _delete(_id) {
    var deferred = Q.defer();
 
    db.users.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);
 
            deferred.resolve();
        });
     return deferred.promise;
}