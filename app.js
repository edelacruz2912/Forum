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
var userinfo = fs.readFileSync('userInfo.json');
var infoarray = JSON.parse(userinfo);
console.log(infoarray);
// use res.render to load up an ejs view file
// index page 

app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.post('/login',urlencodedParser,function(req,res){

	//username and password from req.body.username and password
	// are the name attribute on the form 
    var username = req.body.username;
    var password = req.body.password;
   	for (i = 0; i < infoarray.length; i++) 
   	{
    	// console.log(infoarray[i].username);
    	if(username === infoarray[i].username)
    	{
    		console.log("log in success");
            res.redirect('/profile');
            break;
    	}       
    
	}
    // res.redirect('/');
});

app.get('/profile',urlencodedParser,function(req,res){

   res.render('profile.ejs');
});


app.listen(8080);
console.log('8080 is the magic port');