const express = require('express');
const { check, validationResult } = require('express-validator');

const router = express.Router();

/**
 * @route POST /api/v1/users
 * @desc Create a new user
 * @access public
 */
router.post(
  '/',
  [
    check('name', 'Please enter your full name.').not().isEmpty(),
    check('email', 'Please enter your email address.').isEmail(),
    check('password', 'Please insert atleast 6 characters.').isLength({
      min: 6,
      max: 15,
    }),
  ],
  (req, res) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    const { name, email, password } = req.body;

    try {
      res.json({ name, email, password });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: 'Server error' });
    }
  }
);

module.exports = router;
