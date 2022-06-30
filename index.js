const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const connectDB = require('./db/connectDB');
const items = require('./routes/items');

app.use(express.json());
app.use(cors({ origin: true }));

app.use('/api/items', items);

const start = () => {
  try {
    connectDB();
    app.listen(port, () => {
      console.log('Listenting on', port);
    });
  } catch (err) {
    console.log(err);
  }
};

start();

app.get('/', (req, res) => {
  res.send('Welcome to object management backend');
});
