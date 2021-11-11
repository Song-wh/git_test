var http = require('http');
var fs = require('fs');

var app = http.createServer(function (request, response) {
    var url = request.url;
    console.log("dirname:" + __dirname);
    url = "/public/view" + url;
    response.writeHead(200);
    var fileData = null;
    console.log("url:", url);
    
    try {
        fileData = fs.readFileSync(__dirname + url);
    } catch(err) {
        response.writeHead(404);
        response.end('not found');
        return;
    }

    if( fileData == null ) {
        response.writeHead(404);
        response.end('not found');
        return;
    }

    response.end(fileData);
    return;
});
app.listen(3000, function(){
    console.log(`127.0.0.1:3000`); 
});