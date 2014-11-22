var express = require('express'),
    server  = express(),
    conf    = require('./server/conf');

var morgan  = require('morgan'),
    bodyParser = require('body-parser');


server.use(morgan('dev'));



server.use('/', express.static(__dirname+'/public/'));

require('./server/db/mongo')();
require('./server/db/mysql')();



server.listen(conf.server.port, conf.server.host.local, function(){
    console.log("listening on : " + conf.server.host.local + ":"+conf.server.port);
});

