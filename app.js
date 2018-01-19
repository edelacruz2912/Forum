// server.js
// load the things we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('views'));

var userinfo = fs.readFileSync('');
var infoarray = JSON.parse(userinfo);

// use res.render to load up an ejs view file
// index page 
app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.post('/login',urlencodedParser,function(req,res){
	var usrname = req.body.usrname;
	console.log(usrname);
	res.redirect('/');
});

app.listen(8080);
console.log('8080 is the magic port');