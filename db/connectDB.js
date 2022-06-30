const mongoose = require('mongoose');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5i4ey.mongodb.net/itemdb?retryWrites=true&w=majority`;

const connectDB = async () => {
  await mongoose.connect(uri);
};

module.exports = connectDB;
