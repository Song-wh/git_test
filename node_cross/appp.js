var express = require('express');
var app = express();
var path = require('path');
var port = 3000;

app.use(express.static(path.join(__dirname, './public')));
app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/view/index.html");
});

app.get('/sub1.html', function(req, res){
    res.sendFile(__dirname + "/view/sub1.html");
});

app.get('/sub2.html', function(req, res){
    res.sendFile(__dirname + "/view/sub2.html");
});

app.use(function(req, res,){
    res.status(404).sendFile(__dirname + "/view/not_found.html");
});


app.listen(port, function(){
    console.log(`127.0.0.1:${port}`);
    console.log(__dirname);
});