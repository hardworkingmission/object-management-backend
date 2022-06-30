const Item = require('../models/items');

const allItems = async (req, res) => {
  const query = req.query.name || '';
  const sortByName = req.query.sortByName || false;
  //console.log(query);
  let items = [];
  if (query) {
    const data = await Item.find({});
    const result = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    items = sortByName
      ? [...result].sort((a, b) => a.name.localeCompare(b.name))
      : [...result];
  } else {
    const result = await Item.find({});
    items = sortByName
      ? [...result].sort((a, b) => a.name.localeCompare(b.name))
      : [...result];
  }

  res.send(items);
};

const singleItem = async (req, res) => {
  const itemId = req.params.id;
  //console.log(itemId);
  const result = await Item.findById(itemId);
  res.send(result);
};

const createItem = async (req, res, next) => {
  try {
    const itemInfo = req.body;
    const result = await Item.create(itemInfo);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const updateItem = async (req, res, next) => {
  try {
    const itemId = req.params.id;
    const itemInfo = req.body;
    const result = await Item.findByIdAndUpdate(itemId, itemInfo, {
      new: true,
    });
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const deleteItem = async (req, res, next) => {
  try {
    const itemId = req.params.id;
    const result = await Item.findByIdAndDelete(itemId);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  allItems,
  singleItem,
  createItem,
  updateItem,
  deleteItem,
};
