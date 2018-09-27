const http = require('http');
const fs = require('fs');

var server = http.createServer();
server.listen(3000);

server.on('request', function(request, response){
	response.setHeader('Content-Type', 'text/html; charset=utf-8');

	if(request.method === 'GET' && request.url === '/q'){
		fs.readFile('./index.html', 'utf-8', function(err, data){
			if(err) throw err;
			response.write(data);
			response.end();
		});
	}

	else {
		response.statusCode = 404;
        fs.readFile('./error.html', 'utf-8', function(err, data){
        	if(err) throw err;
        	response.write(data);
        	response.end();
        });
	}
})