const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const { Logs } = require('../middleware/middleware')
const Users = require('../models/users')
const DBs = require('../models/dbs')


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
        let User = Users.create({ login: req.body.user, pass: req.body.passwd, DBs: req.body.dbAccesss })
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