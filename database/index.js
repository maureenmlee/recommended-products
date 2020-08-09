/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/etsy', { useMongoClient: true });

mongoose.connection
  .once('open', () => {
    console.log('Mongoose is connected to database server');
  })
  .on('error', () => { console.log('error occurred'); });

// product schema
// add a recommended products array (array of objects that look exactly like this schema)
const productSchema = new mongoose.Schema({
  // make sure id is unique
  productId: { type: Number, unique: true },
  productName: String,
  recommendedProducts: [mongoose.Schema.Types.Mixed],
  image: String,
  price: Number,
  productSeller: String,
  availability: String,
});

// first argument of model() is the singular form of the collection you want to add this document to
const Product = mongoose.model('product', productSchema);

module.exports = Product;
