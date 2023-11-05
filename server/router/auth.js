const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../DB/model/userSchema');

// Registration route
router.post('/register', async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill in all the required fields" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already in use" });
    }

    const user = new User({ name, email, phone, work, password, cpassword });

    try {
      await user.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
      if (err.name === 'ValidationError') {
        const errorMessages = Object.values(err.errors).map((error) => error.message);
        res.status(422).json({ error: errorMessages });
      } else {
        console.error("Error saving user:", err);
        res.status(500).json({ error: "Failed to register due to a server error" });
      }
    }
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Failed to register due to a server error" });
  }
});

// Login route
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill in all the required fields" });
    }

    const userLogin = await User.findOne({ email: email });

    if (!userLogin) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, userLogin.password);

    token = await userLogin.generateAuthToken();
    console.log(token);

    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 25892000000),
      httpOnly:true
    });



    // Inside your login route
if (isMatch) {
  const token = jwt.sign({ _id: userLogin._id }, 'YourSecretKeyHere');
  userLogin.tokens = userLogin.tokens.concat({ token });
  await userLogin.save();
  res.json({ token, message: "User sign in successfully" });
} else {
  res.status(400).json({ error: "Invalid credentials" });
}

  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Failed to log in due to a server error" });
  }
});

module.exports = router;
