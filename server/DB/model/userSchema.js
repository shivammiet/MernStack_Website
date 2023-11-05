const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// Hashing the password and cpassword fields before saving
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  if (this.isModified('cpassword')) {
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

// Generate a token for the user
userSchema.methods.generateAuthToken = async function () {
  try {
    const tokenShivam = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: tokenShivam });
    await this.save();
    return tokenShivam;
  } catch (err) {
    console.log(err);
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
