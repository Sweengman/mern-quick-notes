const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

//require dotenv near top of server
require('dotenv').config()

// connect to database
require('./config/database')

const app = express();
   
app.use(logger('dev'));
app.use(express.json());


 // Configure both serve-favicon & static middleware
 // to serve from the production 'build' folder
 app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
 app.use(express.static(path.join(__dirname, 'build')));

 app.use(require('./config/checkToken'))
 app.use('/api/users', require('./routes/api/users'))
 app.use('/api/notes', require('./routes/api/notes'))

 app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  

 const port = process.env.PORT || 3001;
	
 app.listen(port, function() {
   console.log(`Express app running on port ${port}`)
 });