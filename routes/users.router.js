const express = require('express');

const router = express.Router();

//query parameters

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    response.json({
      limit,
      offset,
    });
  } else {
    res.send('There is no parameters');
  }
});

module.exports = router;
