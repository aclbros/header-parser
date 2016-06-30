var express = require("express");

// load express
var app = express();

// define routes
app.use(require('./api'));

// start server
var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});