var http = require('http');
var fs = require('fs');
var express = require('express');

app =express();
app.set('view engine','ejs');
app.use('/css', express.static('css'));
app.use('/scss', express.static('scss'));
app.get('/',function(req,res){
    res.render('index');
    console.log(req.query);
})
app.get('/kiki',function(req,res){
    res.render('index',{qs:req.query});
    console.log(req.query);
})

app.get('/api/:id',function(req,res){
    res.send('this is an api call number' + req.params.id);
})
app.listen(3000); 