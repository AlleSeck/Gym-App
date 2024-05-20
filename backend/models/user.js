const Joi = require('joi');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  lastname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  birthdate: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  phone: {
    type: String,
    maxlength: 15
  },
  isAdmin: Boolean
});

userSchema.methods.generateAuthToken = function() { 
  const token = jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin }, 
    process.env.JWT_PRIVATE_KEY,
    { expiresIn: '30d' } // Token expires in 30 days
  );
  return token;
}

const User = mongoose.model('User', userSchema);

function validateUser(user) {
  const schema = Joi.object({
    firstname: Joi.string().min(2).max(50).required(),
    lastname: Joi.string().min(2).max(50).required(),
    birthdate: Joi.date().required(),
    email: Joi.string().min(5).max(255).required().email(),
    confirmEmail: Joi.string().valid(Joi.ref('email')).required(),
    password: Joi.string().min(5).max(255).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
    phone: Joi.string().max(15).optional(),
    termsAccepted: Joi.boolean().valid(true).required()
  });

  return schema.validate(user);
}

exports.User = User; 
exports.validate = validateUser;
