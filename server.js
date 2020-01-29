const express = require('express') ;

const app = express() ;

app.use(express.static(__dirname + '/client')) ;

// We set up environment variable

const port = process.env.PORT || 3000 ;

app.listen(port, () => {
	console.log('port successfully running on port ' + port) ;
}) ;