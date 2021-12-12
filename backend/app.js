const express = require('express');
const Sequelize = require('sequelize');
const cors = require('cors')
const main = require('./routes/main')
const Users = require('../backend/models/users')
const Dbs = require('../backend/models/dbs')
const UsersAndDbs = require('../backend/models/usersAndDb')
    //const initDbs = require('../backend/initDb')
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
    sequelize.sync({ force: true }).then(function() {
        console.log("Database synced")
    }).catch(function(error) {
        console.log(error);
    })
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use(cors)
app.use(express.json())
app.use(main)
app.listen(port, host, () => {
    console.log(`Server running on ${host} : ${port}`);
    //const result = Users.findAll()
    //console.log(JSON.stringify(result));
});