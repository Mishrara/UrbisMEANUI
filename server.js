var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const config = require('./config/database');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


var index = require('./routes/index');
var main = require('./routes/main');
var cpaya = require('./routes/cpaya');
var dropdown = require('./routes/dropdown');
var port = 3030;
var app = express();

//view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs'); 
app.engine('html',require('ejs').renderFile);
const router = express.Router()
app.use(cors({
origin:"http://localhost:4200"
}));
//set static foder
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'src')));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+'/client/dist/'));
mongoose.connect(config.uri,(err)=>{
	if (err) {
		console.log('connection failure');
	}
	else
	{
		console.log('Connection Success with DB :' + config.db);
	}
});

// app.use('/api/',main);
// //const cpay= require('./routes/cpaya')(router);
app.use('/',dropdown);
app.use('/api/',cpaya);
app.use('/',index);

app.listen(port,function(){
	console.log('started srv fr' + port);
});
