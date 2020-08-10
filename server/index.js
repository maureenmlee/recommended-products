// import dependencies
// import { trialMethod} from "../client/src/index.jsx";

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;
var currentId;


// sets currentId to the id of the url typed in the browser.
const setProductID = (req, res, next) => {
  console.log(req.params.id);
  // console.log("got here!! ");
  currentId = req.params.id;
  next();
};

// middleware
app.use('/products/:id', setProductID);
app.use('/products/:id', bodyParser.json() );
app.use('/products/:id', express.static(path.join(__dirname, '../client/public')));
// app.use('/products/:id', setProductID);

// app.use(bodyParser.json() );
// app.use(express.static(path.join(__dirname, '../client/public')));


// routes
app.get('/', function (req, res) {
  res.status(200).send('This is the homepage.');
})

app.get('/products', function (req, res) {
  res.status(200).send('This is the products page.');
})

// app.get('/products/:id', function (req, res) {
//   currentId = req.params.id;
//   console.log(currentId);
//   res.status(200).send(`You requested to see a product with the id of ` + req.params.id);
// })

app.get('/data/products', function (req, res) {
  // console.log(currentId);
  res.status(200).send(currentId);
})

// start the server
app.listen(PORT, (err) => {
  if (err) {
    console.log('Failed to connect to server.')
  } else {
    console.log('Server listening on Port:', PORT);
  }
})
