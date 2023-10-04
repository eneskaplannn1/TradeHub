const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE).then(() => {});
    console.log('Connected to the Database');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

module.exports = connectToDatabase;
