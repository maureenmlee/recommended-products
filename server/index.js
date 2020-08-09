// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

// middleware
app.use( bodyParser.json() );
app.use(express.static(path.join(__dirname, '../client/public')));

// routes
app.get('/', function (req, res) {
  res.status(200).send('This is the homepage.');
})

app.get('/products', function (req, res) {
  res.status(200).send('This is the products page.');
})

app.get('/products/:id', function (req, res) {
  res.send(`You requested to see a product with the id of ` + req.params.id);
})

// start the server
app.listen(PORT, (err) => {
  if (err) {
    console.log('Failed to connect to server.')
  } else {
    console.log('Server listening on Port:', PORT);
  }
})
