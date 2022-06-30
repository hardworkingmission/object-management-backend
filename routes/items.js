const express = require('express');
const router = express.Router();
const {
  allItems,
  singleItem,
  createItem,
  updateItem,
  deleteItem,
} = require('../controls/items');

router.route('/').get(allItems).post(createItem);
router.route('/:id').get(singleItem).patch(updateItem).delete(deleteItem);

module.exports = router;
