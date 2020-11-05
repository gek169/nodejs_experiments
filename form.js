#!/usr/bin/node

var http = require('http');
var fs = require('fs');
var formidable = require('formidable');

http.createServer(function (req,res)
{
	//Take in form...
	if(req.url == '/fileupload'){try{
		var form = new formidable.IncomingForm();
		form.parse(req, function(err, fields, files)
		{
			var oldpath = files.filetoupload.path;
			var newpath = '/home/gek/nodejs/' + files.filetoupload.name;
			fs.rename(oldpath, newpath, function(err)
			{
				if(err) throw err;
				res.writeHead(200,{'Content-Type': 'text/plain'});
				res.write('File Uploaded and Stored.', function(err){res.end();});
			});
			return;
		}//eof form parser
		); //eof form.parse
		}catch(error){
			res.writeHead(200,{'Content-Type': 'text/plain'});
			res.write('Server Error!');
			res.end();
			
		}
		return;
	} //eof if(/filetoupload)
	//if no file upload...
	res.writeHead(200,{'Content-Type': 'text/html'});
	res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
	res.write('<input type="file" name="filetoupload">');
	res.write('<input type="submit">');
	res.write('</form>');
	return res.end();
}
).listen(7000);
