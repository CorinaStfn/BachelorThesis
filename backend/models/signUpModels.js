const mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const signUpSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true,
        trim: true
    },
    lastName: {
        type: String,
        required:true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
})



// hash password before saving to database
signUpSchema.pre('save', function(next) {
    var user = this;
    bcrypt.hash(user.password, 10, function(err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    })
  });
  var User = mongoose.model('User', signUpSchema, '');
  module.exports = User;