var express = require('express');
var router = express.Router();

router.get('/main', function(req,res,next){
	res.send('hi  main');
});

module.exports = router;