const express = require('express');
const router = express.Router();
const {logging} = require('../middleware/middleware')

/* GET home page. */
router.get('/', logging ,function(req, res, next)  {
  res.status(200).send({ message : "Working"});
});

module.exports = router;
