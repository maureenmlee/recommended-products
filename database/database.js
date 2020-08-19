const product = require('./index.js');

// function that retrieves the recommendedProducts data for the product with the specified id.
const getRecommendedProductsData = (id, callback) => {
  product.find({ productId: id }, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  });
};

module.exports.getRecommendedProductsData = getRecommendedProductsData;
