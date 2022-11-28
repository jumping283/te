var app = require('http').createServer(createServer);
var fs = require('fs'); 
var url = require('url');

function createServer(req, res) {
    var path = url.parse(req.url).pathname;
    var fsCallback = function(error, data) {
        if(error) throw error;

        res.writeHead(200);
        res.write(data);
        res.end();
    }

    switch(path) {
        case '/how':
            doc = fs.readFile(__dirname + '/game.html', fsCallback);
        break;
        case '/why':
            doc = fs.readFile(__dirname + '/11w.htm', fsCallback);
        break;
        default:
            doc = fs.readFile(__dirname + '/index.html', fsCallback);
        break;
    }
}

app.listen(8080);
