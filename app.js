// server.js
// load the things we need
var express = require('express');
var app = express();

var bodyParser = require('body-parser'); // Loads the piece of middleware for managing the settings
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('index.ejs');
});

// about page 
app.get('/login', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');