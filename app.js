
var Browser = require('zombie'),
	assert = require('assert'),
	fs = require('fs'),
	h2j = require('html-to-js'),
	read = fs.readFileSync;

var html = read(__dirname+'/public/2nd.html','utf-8');
var parser = require('html-parser');

objs =[];
var sanitized = parser.sanitize(html, {
    elements: [ '!--','div' ,'span','object','ul','li','meta','link','style','a','p','canvas'],
    attributes: [ 'data'['gamecast'] ],
    comments: false
});

parser.parse(sanitized, {
     cdata: function(value) { objs.push(value) },
});
var data = objs[4];
var str = data.toString();
str = str.slice(str.indexOf('{')-1,str.length-2);
str=str.substr(0,str.lastIndexOf(';'));
var json = eval("("+str+")");

console.log(json['data'].gamecast.stats.player);