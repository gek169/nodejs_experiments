#!/usr/bin/node

var http = require('http');

http.createServer(function (req,res)
{
	res.writeHead(200,{'Content-Type': 'text/plain'});
	res.end('Heya Gek! <from node!>');
}
).listen(7000);
