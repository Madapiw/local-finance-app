const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql:dbuser:db123@localhost:3306/finance_app');
const { Logs } = require('../middleware/middleware')
const Users = require('../models/users')
const DBs = require('../models/dbs')
const usersAndDb = require('../models/usersAndDb')

//fix this
//const queryInterface = sequelize.getQueryInterface();
//queryInterface.createTable(Users)

Users.belongsToMany(DBs, { through: usersAndDb, foreignKey: { name: 'id_user' } })
DBs.belongsToMany(Users, { through: usersAndDb, foreignKey: { name: 'id_db' } })


router.get('/', Logs, function(req, res) {
    try {
        res.send({ message: 'working' })
    } catch (error) {
        res.status('503').send({ error: error.message })
    }
});

router.get('/user/all', Logs, function(req, res) {
    try {
        result = Users.findAll()
        res.send({ result: result })
    } catch (error) {
        res.status('400').send({ error: error.message })
    }
});

router.get('/user/:user', Logs, function(req, res) {
    try {

        // req.params.user
    } catch (error) {
        res.status('400').send({ error: error.message })
    }
});

router.post('/user', Logs, function(req, res) {
    try {
        const User = Users.create({ login: req.body.login, passwd: req.body.passwd, DBs: req.body.dbAccesss })
        console.log(User.login);
        console.log(User.id);
        if (User instanceof login) {
            res.send({ message: `User ${User.login} created` });
        }
    } catch (error) {
        res.status('400').send({ error: error.message })
    }
});


module.exports = router