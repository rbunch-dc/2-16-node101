var http = require('http');
var fs = require('fs'); //include the file system module

// console.log(http);


// localFolder = __dirname
// getFile((localFolder + fileName),res,page404,extensions[ext]);

function renderHomePage(request, response){
	var homePageHtml = fs.readFileSync('homePageHtml.html')
	response.writeHead(200,{'content-type': 'text/html'});
	response.end(homePageHtml);

	// response.end(homePageHtml);
	// console.log(response);
}

function render404Page(request, response){
	response.writeHead(404);
	response.end('404, page not found.');
}

var server = http.createServer(function(request, response){
	// console.log(request.url);
 	// response.writeHead(200, {'content-type': 'text/html'});
	if(request.url == '/'){
		renderHomePage(request, response);
	}else if(request.url == '/logo.png'){
	    var img = fs.readFileSync('logo.png');
    	response.writeHead(200, {'Content-Type': 'image/png' });
     	response.end(img, 'binary');
	}else{
		render404Page(request, response);
	}

	// console.log(request.statuscode);

 	// response.write('<script>console.log("hey Im in the browser");</script>');
 	// response.write('Hello, class');
 	// console.log(request);
 	// console.log(response);
 	console.log('This is a line to show that someone came to the server.');
	response.end();
});

server.listen(8000);
console.log("Our server is listening on port 8000.");