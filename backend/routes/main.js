const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');


router.get('/', function(req, res) {
    try {
        res.send({ message: 'working' })
    } catch (error) {
        res.status('503').send({ error: error.message })
    }
});

router.get('/all', function(req, res) {
    try {

    } catch (error) {

    }
});


module.exports = router