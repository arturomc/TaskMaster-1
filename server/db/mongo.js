var db  = require('../conf').db.mongo;
var mongoose	= require('mongoose');


module.exports = function(){
    mongoose.connect(db.url, function(){
        console.log('connected to mongo')
    });
}
;