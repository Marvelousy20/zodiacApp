const express = require('express') ;

const app = express() ;

// connect project to front end

app.use(express.static(__dirname + '/client')) ;

// We set up environment variable

const port = process.env.PORT || 3000 ;

// Check if project is connected to the server 

app.listen(port, () => {
	console.log('port successfully running on port ' + port) ;
}) ;