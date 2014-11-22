module.exports = {

// Server config params
    server: {
        port: process.env.PORT || 3000,
        host: {
            local: process.env.HOST || "0.0.0.0"
        }
    },
// DB config params
    db:{
        mongo:{
            url:"mongodb:127.0.0.1",
            port:27017,
            database:"taskmaster_volatile",
            user:"",
            password:""
        },
        mysql:{
            url:"127.0.0.1",
            port:8889,
            database:"taskmaster_static",
            user:"admin",
            password:"admin"
        }
    }
}
;