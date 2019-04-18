var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');
//
app.get('/',function (req,res){
	res.render('home');
	});
	
app.get('/about',function (req,res){
	res.render('about');
});

app.get('/about',function (req,res){
	res.render('concat');
});

app.get('/about',function (req,res){
	res.render('location');
});

app.get('/api',function(req,res){
res.json({firstname: "John", lastname:"Doe"})
});

app.listen(8080);
	