const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  ram: {
    type: String,
    required: true,
  },
  storage: {
    type: String,
    required: true,
  },
  screen_size: {
    type: String,
    required: true,
  },
});

const Item = new mongoose.model('Item', itemSchema);

module.exports = Item;
