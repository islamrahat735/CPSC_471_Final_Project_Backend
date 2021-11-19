const mysql = require("mysql2");


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'daycare',
  password: 'cpsc471',
  database: 'DAYCARE'
});

module.exports = connection;