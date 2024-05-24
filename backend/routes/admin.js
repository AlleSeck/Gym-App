const express = require('express');
const router = express.Router();
const { User } = require('../models/user');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

// Route to get all clients
router.get('/clients', [auth, admin], async (req, res) => {
  const clients = await User.find().select('-password');
  res.send(clients);
});


module.exports = router;
