var db = require('../conf').db.mysql;



module.exports = function(){

    var Sequelize   = require('sequelize'),
        sequel      = new Sequelize(db.database, db.user, db.password, {
            dialect:"mysql",
            port:db.port
        });

    sequel
        .authenticate()
        .complete(function(err) {
            if (!!err) {
                console.log('Unable to connect to the MySQL DB:', err)
            } else {
                console.log('Connection has been established successfully on MySQL DB.')
            }
        })
};