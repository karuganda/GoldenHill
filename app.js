var http = require('http');
var fs = require('fs');
var express = require('express');

app =express();

app.get('/',function(req,res){
    res.sendFile(__dirname +'/index.html')
})
app.get('/kiki',function(req,res){
    res.sendFile(__dirname +'/index1.html')
})

app.get('/api/:id',function(req,res){
    res.send('this is an api call number' + req.params.id);
})
app.listen(3000); 