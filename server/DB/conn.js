const mongoose = require('mongoose');

// Replace 'mongodb://localhost:27017/MERNSTACK' with your actual MongoDB connection string
const DB = 'mongodb://localhost:27017/MERNSTACK';

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connection successful');
}).catch((err) => {
  console.error('Database connection failed:', err);
});
