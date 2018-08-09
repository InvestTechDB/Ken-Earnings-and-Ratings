let mysql = require('mysql');

let connection = mysql.createConnection({
  user: 'root',
  database: 'invesTechSol_JB',
  host: 'localhost',
  password: ''
});

module.exports = connection;