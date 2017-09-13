var sql = require("mssql");

// config for your database
var config = {
        driver: 'msnodesqlv8',
        server: 'localhost',
        database: 'URBISDB11X',
        port:1433,
        options:{
            trustedConnection: true,
            useUTC: true
        }
    }
// connect to your database
var connection = sql.connect(config, function (err) {
    if (err){
            console.log("SQL Connection Error: " + err);
            throw err; 
        }
    else
        {
            console.log("connection successfull with SQL DB");
        }
        
});

module.exports = connection; 