var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');


/*var app = http.createServer(function (request, response) {
    var path = url.parse(request.url, true).pathname;
    if (request.method === 'GET') {
        if (path === '/') {
            response.write(200, {'Content-Type': 'text/html'});
            fs.readFile(__dirname + '/index.html', function (err, data) {
                if (err) {
                    return console.erroer(err);
                }
                response.end(data, 'utf-8');
            });
        } else if (path === '/sub1.html') {
            response.write(200, {'Content-Type': 'text/html'});
            fs.readFile(__dirname +  '/sub1.html', function (err, data){
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8');
            });
        } else if (path === '/sub2.html') {
            response.write(200, {'Content-Type':'text/html'});
            fs.readFile(__dirname + '/sub.html', function (err, data){
                if (err) {
                    return console.error(err);
                }
                response.end(data, 'utf-8');
            });
        } else {
            response.statusCode = 404;
            response.end('Not found');
        }
        console.log('127.0.0.1:3000');
    }
});
app.listen(3000);*/

/*var app = http.createServer(function(request, response){
    var filePath = false;
    if(request.url == '/'){
        filePath = '/view/index.html';
    } else {
        filePath = request.url;
    }
    if(request.url == '/sub1.html'){
        filePath = '/view/sub1.html';
    } else {
        filePath = request.url;
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + filePath));
    
});
//console.log(_url);
app.listen(3000);*/


/*var app = http.createServer(function (request, response) {
    var url = request.url;
    var arSplitUrl = request.url.split("/");
    var nArLength = arSplitUrl.length;
    var arFileName = arSplitUrl[nArLength - 1];
    var arSplitFileName = arFileName.split(".");
    var sFileExtension = arSplitFileName[1];
    if (request.url == '/') {
        url = '/view/index.html';
    } else if (request.url == '/sub1.html') {
        url = '/view/sub1.html';
    } else if (request.url == '/sub2.html') {
        url = '/view/sub2.html'
    }
    if (request.url == '/favicon.ico'){
        response.writeHead(404);
        response.end('not found');
        return;
    }
    //console.log(sFileExtension);
    var _url = request.url;
    var queryData = url.parse(_url, true);
    console.log(queryData);
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);*/


/*var http = require('http');
var fs = require('fs');
var url = require('url');


var app = http.createServer(function (req, res) {
    var reqUrl = req.url;
    var parsedUrl = url.parse(reqUrl, true);

    var pathname = parsedUrl.pathname;

    if (pathname == '/') {
        reqUrl = '/view/index.html';
        fs.readFile(__dirname + reqUrl, function (err, result) {
            if (err) {
                console.log('file read fail.. : ' + err.message);
                res.writeHead(404, {
                    'Content-Type': 'text/html'
                });
                res.end('404 : NOT FOUND');
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html',
                    'Content-Type': 'text/css',
                    'Content-Type': 'image/png'
                });
                reqUrl = '/view/index.html'
                res.end(fs.readFileSync(__dirname + reqUrl));
            }
        });
    } else if(pathname == '/sub1.html') {
        request.url = '/view/sub1.html';
        fs.readFile(__dirname + request.url, function (err, result) {
            if (err) {
                console.log('file read fail.. : ' + err.message);
                res.writeHead(404, {
                    'Content-Type': 'text/html'
                });
                res.end('404 : NOT FOUND');
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.end(fs.readFileSync(__dirname + request.url));
            }
        });
    } else if(pathname == '/sub2.html'){
        request.url = '/view.sub2.html';
        fs.readFile(__dirname + request.url, function (err, result){
            if (err) {
                console.log('file read fail.. : ' + err.message);
                request.writeHead(404, {
                    'Content-Type': 'text/html'
                });
                res.end('404 : NOT FOUND');
            } else {
                res.write(200, {
                    'Content-Type': 'text/html'
                });
            }
        })
    }
    console.log(reqUrl);
    console.log(parsedUrl);
});


app.listen(3000, function () {
    console.log('Server listens on port 3000...');
});*/




/*var http = require('http');
var fs = require('fs');
var _url = require('url');
var app = http.createServer(function (request, response) {
    var parsedUrl = _url.parse(request.url, true);
    var pathname = parsedUrl.pathname;
    var url = request.url;
    if (pathname == '/') {
        url = '/view/index.html';
        fs.readFile(__dirname + url, function (err, result) {
            if (err) {
                console.log('file read fail.. : ' + err.message);
                response.writeHead(404, {
                    'Content-Type': 'text/html'
                });
                response.end('404 : NOT FOUND');
            } else {
                url = '/view/index.html';
                response.writeHead(200, {
                    'Content-Type': 'text/html'
                })
                response.end(fs.readFileSync(__dirname + url));
                console.log(url);
                if (url = '/public/css/index.css') {
                    url = '/public/css/index.css';
                    response.writeHead(200, {
                        'Content-Type': 'text/css'
                    });
                    response.end(fs.readFileSync(__dirname + url));
                    console.log(url);
                } else if (url = '/public/css/index.css') {
                    url = '/public/css/index.css';
                    response.writeHead(200, {
                        'Content-Type': 'text/css'
                    });
                    response.end(fs.readFileSync(__dirname + url));
                    console.log(url);
                }
            }
        });
    }
});
app.listen(3000);*/

var app = http.createServer(function (request, response) {
    var _url = requers.url;
    var queryData = url.parse(_url, true).query;
    var queryId = queryData.id;
    if (_url == '/'){
        raqUrl = '/public/view/index.html';
        response.writeHead(200);
    }
    console.log(queryId);
});







var arSplitUrl = url.split("/");
console.log("arSplitUrl:", arSplitUrl);

if( arSplitUrl.length < 2 ) {
    response.writeHead(404);
    response.end('not found');
    return;
}

var fileName = arSplitUrl[1];
console.log("fileName:", fileName);

var arFileName = fileName.split(".");
console.log("arFileName:", arFileName);

if( arFileName.length < 2 ) {
    console.error("ERROR arFileName:", arFileName);
    response.writeHead(404);
    response.end('not found');
    return;
}

var sFileName      = arFileName[0];
var sFileExtension = arFileName[1]; // html,css,...
if( sFileExtension == "html" ) {
    url = '/public/view/' + sFileName + '.' + sFileExtension;
}
else
if( sFileExtension == "css" ) {
    url = '/public/css/' + sFileName + '.' + sFileExtension;
}
else
if( sFileExtension == "png" ) {
    url = '/public/img/' + sFileName + '.' + sFileExtension;
}
else {
    console.error("ERROR sFileExtension:", sFileExtension);
    response.writeHead(404);
    response.end('not found');
    return;
}

console.log("url:", url);
response.writeHead(200);
response.end(fs.readFileSync(__dirname + url));