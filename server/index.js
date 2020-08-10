// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/database.js');
const app = express();
const PORT = 3000;

// storing the id that was specified in the url parameter in the browser.
var currentId;

// sets currentId to the id of the url typed in the browser.
const setProductID = (req, res, next) => {
  currentId = req.params.id;
  next();
};

// middleware
app.use('/products/:id', setProductID);
app.use('/products/:id', bodyParser.json() );
app.use('/products/:id', express.static(path.join(__dirname, '../client/public')));

// routes
app.get('/', function (req, res) {
  res.status(200).send('This is the homepage.');
})

app.get('/products', function (req, res) {
  res.status(200).send('This is the products page.');
})

// retrieves the recommendedProducts data for the product with the currentId.
app.get('/data/products', function (req, res) {
  db.getRecommendedProductsData(currentId, (err, data) => {
    if (err) {
      res.status(500).send('Could not retrieve recommended product data.');
    } else {
      res.status(200).send(data);
    }
  })
})

// start the server
app.listen(PORT, (err) => {
  if (err) {
    console.log('Failed to connect to server.')
  } else {
    console.log('Server listening on Port:', PORT);
  }
})
