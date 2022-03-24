const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {
  try {
    const username = req.body.username;
    const password = req.body.password;
    res.status(200).send({
      login: username,
      status: "Registered"
    })
  } catch (error) {
    res.status(503).send({'error': error.message})
  }
});

module.exports = router;
