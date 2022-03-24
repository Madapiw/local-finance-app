const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send({
    token: 'test123'
  });
});

router.post('/', (req, res) => {
    res.send({
      token: 'test123'
    });
  });

module.exports = router;