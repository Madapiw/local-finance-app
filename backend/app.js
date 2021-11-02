const express = require('express');
const mysql = require('mysql')
const Sequelize = require('sequelize');
const cors = require('cors')
const models = require('./models/users')
const main = require('./routes/main')
const port = 3000
const app = express();
const host = '127.0.0.1'

/*
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'db123',
    database: 'finance_app'
})

connection.connect();
*/

const sequelize = new Sequelize('finance_app', 'dbuser', 'db123', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use(cors)
app.use(express.json())
app.use(main)
app.listen(port, host, () => {
    console.log(`Server running on ${host} : ${port}`);
});