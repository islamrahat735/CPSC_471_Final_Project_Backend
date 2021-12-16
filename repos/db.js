const mysql = require("mysql2");


// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'daycare',
//   password: 'cpsc471',
//   database: 'DAYCARE'
// });

//USE THIS CONNECTION INSTEAD IF YOU WANT TO CONNECT TO THE CLOUD DATABASE
var connection = mysql.createConnection({
  host: 'daycare1.cuhvrmx7alrb.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'daycarecpsc471',
  database: 'DAYCARE'
});

module.exports = connection;