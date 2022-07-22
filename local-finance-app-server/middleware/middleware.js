const crypto = require("crypto");

async function auth(req, res, next) {
    try {
        console.log('logowanie')
        next()
    } catch (error) {
        res.status(401).send(error.message)

    }
}

async function logging(req, res, next){
    try {
        console.log(`${req.host} : ${req.method} => ${req.path}`)
        next()
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = { auth , logging}