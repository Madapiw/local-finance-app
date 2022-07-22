const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const { Router } = require('express');
const { logging } = require('../middleware/middleware');

const hashpassword = (password) => {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return [salt, hash];
}

router.get('/crypto', logging, (req, res, next) => {
    const [salt, hash] = hashpassword(req.query.password);
    res.send({
        'salt': salt,
        'hash': hash
    })
});


//login user
router.use('/login',logging, (req, res, next) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        if (username !== '' & password !== '' ) {
            res.status(200).send({
                token: 'token123'
            })
        }else{
        res.status(503).send({
            message:'Page forbiden'
        })
    }
    } catch (error) {
        res.status(503).send({ error: error.message });
    }
});

//register user
router.post('/register', logging , (req, res, next) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        
    } catch (error) {
        res.status(503).send({ error: error.message });
    }
});




module.exports = router;