const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(req, res){
    let pathname = url.parse(req.url).pathname;
    pathname = pathname == '/' ? '/index' : pathname;

    let routes = ['/index','/about','/contact'];

    let filename = routes.includes(pathname)  ? '.' + pathname + '.html' : './404.html';

    fs.readFile(filename,function(err, data){
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write('404: Not Found');
            return res.end();
        }
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
    
}).listen(8080);