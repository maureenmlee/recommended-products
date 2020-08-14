/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/etsy', { useMongoClient: true });

mongoose.connection
  .once('open', () => {
    console.log('Mongoose is connected to database server');
  })
  .on('error', () => { console.log('error occurred'); });

// product schema
const productSchema = new mongoose.Schema({
  productId: { type: Number, unique: true },
  productName: String,
  recommendedProducts: [mongoose.Schema.Types.Mixed],
  image: String,
  price: Number,
  productSeller: String,
  availability: String,
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
