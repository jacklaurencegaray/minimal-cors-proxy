require('dotenv').config({ path: './.env' });
var proxy= require('express-http-proxy');
var app = require('express')();
var port = process.env.PORT || 7000;

if (!process.env.HOST) 
  throw new Error("You have to define ACTUAL_HOST in your environment variables.");

var host = process.env.HOST;
console.log('A proxy for ', host, ' is running');
console.log('Running at: ', 'http://localhost:'.concat(port));
 
app.use('/', proxy(host));
app.listen(port);
