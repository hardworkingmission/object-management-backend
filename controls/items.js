const Item = require('../models/items');

const allItems = async (req, res) => {
  const query = req.query.name || '';
  const sortByName = req.query.sortByName;
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

const createItem = async (req, res) => {
  const itemInfo = req.body;
  const result = await Item.create(itemInfo);
  res.send(result);
};

const updateItem = async (req, res) => {
  const itemId = req.params.id;
  const itemInfo = req.body;
  const result = await Item.findByIdAndUpdate(itemId, itemInfo);
  res.send(result);
};

const deleteItem = async (req, res) => {
  const itemId = req.params.id;
  const result = await Item.findOneAndDelete(itemId);
  res.send(result);
};

module.exports = {
  allItems,
  singleItem,
  createItem,
  updateItem,
  deleteItem,
};
