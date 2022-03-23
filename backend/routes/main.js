const express = require('express');
const router = express.Router();
const { Logs } = require('../middleware/middleware')


router.get('/', Logs, function(req, res) {
    try {
        res.send({ message: 'working' })
    } catch (error) {
        res.status('503').send({ error: error.message })
    }
});

router.get('/user/all', Logs, function(req, res) {
    try {
        
    } catch (error) {
        res.status('400').send({ error: error.message })
    }
});

router.get('/user/:user', Logs, function(req, res) {
    try {

    } catch (error) {
        res.status('400').send({ error: error.message })
    }
});

router.post('/user', Logs, function(req, res) {
    try {

    } catch (error) {
        res.status('400').send({ error: error.message })
    }
});


module.exports = router