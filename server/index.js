// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/database.js');

const app = express();
const PORT = 3000;

// middleware
app.use('/products/:id', bodyParser.json());
app.use('/products/:id', express.static(path.join(__dirname, '../client/public')));

// routes
app.get('/', (req, res) => {
  res.status(200).send('This is the homepage.');
});

app.get('/products', (req, res) => {
  res.status(200).send('This is the products page.');
});

// type localhost3000/products/3 in the browser

// retrieves the recommendedProducts data for the product with the currentId.
app.get('/data/:id', (req, res) => {
  db.getRecommendedProductsData(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send('Could not retrieve recommended product data.');
    } else {
      res.status(200).send(data);
    }
  });
});

// start the server
app.listen(PORT, (err) => {
  if (err) {
    console.log('Failed to connect to server.');
  } else {
    console.log('Server listening on Port:', PORT);
  }
});
