const express = require('express');
const router = express.Router();

/**
 * @route GET /api/v1/contacts
 * @desc Get all contacts
 * @access private
 */
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

/**
 * @route POST /api/v1/contacts
 * @desc Create a new contacts
 * @access private
 */
router.post('/', (req, res) => {
  res.send('Create a new contact');
});

/**
 * @route PUT /api/v1/contacts/:id
 * @desc Update contact by id
 * @access private
 */
router.put('/:id', (req, res) => {
  res.send('Update contact by id');
});

/**
 * @route Delete /api/v1/contacts/:id
 * @desc Delete contact by id
 * @access private
 */
router.delete('/:id', (req, res) => {
  res.send('Delete contact by ID');
});

module.exports = router;
