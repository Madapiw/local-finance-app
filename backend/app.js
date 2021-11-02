const express = require('express');
const mysql = require('mysql')

const port = 3000
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'db123',
    database: 'finance_app'
})

connection.connect();

app.use(express.json())
app.listen(port, host, () => {
    console.log(`Server running on ${host} : ${port}`);
});