const express = require('express');

const router = express.Router();

/**
 * @route POST /api/v1/users
 * @desc Create a new user
 * @access public
 */
router.post('/', (req, res) => {
  res.send('Create a new user');
});

module.exports = router;
