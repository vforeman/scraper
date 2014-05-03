// server
var express = require("express"),
 	app = express(),
 	http = require('http');

 var Browser = require('zombie');
 var assert = require('assert');
// configuration =====================
app.use(express.static(__dirname + '/public'));  // set static files location /public/img for users

//route
app.get('/', function(req, res){
	res.sendfile('public/views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

//listen 
var port = Number(process.env.PORT || 5000);
http.createServer(app).listen(port, function(){
	console.log("Listening on " + port);
});



Browser.visit('http://zombie.labnotes.org/', function(e,browser){
	console.log(browser.site);
});
