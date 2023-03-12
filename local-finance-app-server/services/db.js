const dotenv = require("dotenv").config();
const mysql = require("mysql");

const db_connection = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DATABASE,
  port: process.env.DBPORT,
});

function query(sql, callback) {
  db_connection.connect((err) => {
    if (err) {
      console.log(`DB conn error: ${err.message}`);
    } else {
      console.log("Connected to DB");
      db_connection.query(sql, (setTimeout = 50000), (err, result) => {
        if (err) throw console.log(`DB query error: ${err.message}`);
        console.log("Query passed");
        console.log(result);
        return callback(JSON.parse(JSON.stringify(result))); // callback hell
      });
      db_connection.end();
    }
  });
}

module.exports = { query };
