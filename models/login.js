var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var loginModel = new Schema({
    domain: String,
    userId: String,
    password: String,
    otp: Number,
    token : String
    

});

module.exports = mongoose.model("login",loginModel); 