// Use the MariaDB Node.js Connector
let mariadb = require('mariadb/promise');
 
 
// Create a connection pool
var pool = 
  mariadb.createPool({
    host: "localhost", 
    port: 3306,
    user: "root", 
    password: "root",
    database: "taskboard"
  });
 
// Expose a method to establish connection with MariaDB SkySQL
module.exports = Object.freeze({
  pool: pool
});
