const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config(); // Load environment variables from .env file

// Database Connection
const DB = 'mongodb://localhost:27017/MernStack';
require('./DB/conn'); // Assuming this file sets up the MongoDB connection
app.use(express.json());

app.use('/api', require('./router/auth')); // Set a base path for the authentication routes

// Middleware
const middleware = (req, res, next) => {
  console.log('Hello, my middleware');
  next();
};

// Routes
app.get('/', (req, res) => {
  res.send('Hello, world from the server app.js');
});

app.get('/about', middleware, (req, res) => {
  res.send('Hello, this is the about section');
});

app.get('/contact', (req, res) => {
  res.send('Hello, this is the contact page');
});

// Start the Express.js server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
