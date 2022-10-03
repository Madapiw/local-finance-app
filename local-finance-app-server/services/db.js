const dotenv = require("dotenv").config();
const mysql = require("mysql");

const db_connection = {
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT
};

async function query(sql) {
  const connection = await mysql.createConnection(db_connection);
  await connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    return result;
  });
  connection.end()
}

module.exports = { query };
