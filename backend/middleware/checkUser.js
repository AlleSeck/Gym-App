const mongoose = require('mongoose');
const User = require('../models/user'); 

module.exports = async function (req, res, next) {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).send('User not found.');

    next();
  } catch (ex) {
    res.status(500).send('Something went wrong with the user.');
  }
};
