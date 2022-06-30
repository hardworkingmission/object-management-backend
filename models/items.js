const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  brand: String,
  ram: String,
  storage: String,
  screen_size: String,
});

const Item = new mongoose.model('Item', itemSchema);

module.exports = Item;
