const crypto = require("crypto");

async function authenticate(req, res, next) {
    try {
        //check username && password
        console.log('logowanie')
        next()
    } catch (error) {
        res.status(401).send(error.message)

    }
}

async function authorization(req, res, nest) {
    try {
        // check token
        next()
    } catch (error) {
        res.status(401).send(error.message)
    }
}

async function logging(req, res, next){
    try {
        console.log(`${req.hostname} : ${req.method} => ${req.path}`)
        next()
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = { authenticate, authorization, logging }