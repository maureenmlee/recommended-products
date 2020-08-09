/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const faker = require('faker');
const Product = require('./index.js');

const seed = (numOfEntries) => {
  Product.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else if (docs.length > 0) {
      console.log(`The database is already populated with ${docs.length} documents.`);
    } else {
      const product1Images = ['https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product1/rp1.jpg', 'https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product1/rp2.jpg', 'https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product1/rp3.jpg', 'https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product1/rp4.jpg', 'https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product1/rp5.jpg', 'https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product1/rp6.jpg'];

      const product2Images = ['https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product2/rp1.jpg', 'https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product2/rp2.jpg', 'https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product2/rp3.jpg', 'https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product2/rp4.jpg', 'https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product2/rp5.jpg', 'https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product2/rp6.jpg'];

      const product3Images = ['https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product3/rp1.jpg', 'https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product3/rp2.jpg', 'https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product3/rp3.jpg', 'https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product3/rp4.jpg', 'https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product3/rp5.jpg', 'https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product3/rp6.jpg'];

      const product4Images = ['https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product4/rp1.jpg', 'https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product4/rp2.jpg', 'https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product4/rp3.jpg', 'https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product4/rp4.jpg', 'https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product4/rp5.jpg', 'https://recommendedproductspictures.s3-us-west-1.amazonaws.com/product4/rp6.jpg'];

      const imageUrls = [product1Images, product2Images, product3Images, product4Images];

      // setting to be 10 while testing. change to 100 later.
      const quantity = numOfEntries;
      const products = [];
      for (let i = 0; i < quantity; i++) {
        products.push(
          new Product({
            productId: i,
            productName: faker.commerce.productName(),
            recommendedProducts: [
              {
                productName: faker.commerce.productName(),
                image: imageUrls[i % 4][0],
                price: faker.commerce.price(),
                productSeller: faker.internet.userName(),
                availability: faker.random.number() % 2 === 1 && faker.random.number() % 5 > 0 ? `Only ${1} available and it's in ${((faker.random.number()) % 5) + 1} people's carts.` : '',
              }, {
                productName: faker.commerce.productName(),
                image: imageUrls[i % 4][1],
                price: faker.commerce.price(),
                productSeller: faker.internet.userName(),
                availability: faker.random.number() % 2 === 1 && faker.random.number() % 5 > 0 ? `Only ${1} available and it's in ${((faker.random.number()) % 5) + 1} people's carts.` : '',
              }, {
                productName: faker.commerce.productName(),
                image: imageUrls[i % 4][2],
                price: faker.commerce.price(),
                productSeller: faker.internet.userName(),
                availability: faker.random.number() % 2 === 1 && faker.random.number() % 5 > 0 ? `Only ${1} available and it's in ${((faker.random.number()) % 5) + 1} people's carts.` : '',
              }, {
                productName: faker.commerce.productName(),
                image: imageUrls[i % 4][3],
                price: faker.commerce.price(),
                productSeller: faker.internet.userName(),
                availability: faker.random.number() % 2 === 1 && faker.random.number() % 5 > 0 ? `Only ${1} available and it's in ${((faker.random.number()) % 5) + 1} people's carts.` : '',
              }, {
                productName: faker.commerce.productName(),
                image: imageUrls[i % 4][4],
                price: faker.commerce.price(),
                productSeller: faker.internet.userName(),
                availability: faker.random.number() % 2 === 1 && faker.random.number() % 5 > 0 ? `Only ${1} available and it's in ${((faker.random.number()) % 5) + 1} people's carts.` : '',
              }, {
                productName: faker.commerce.productName(),
                image: imageUrls[i % 4][5],
                price: faker.commerce.price(),
                productSeller: faker.internet.userName(),
                availability: faker.random.number() % 2 === 1 && faker.random.number() % 5 > 0 ? `Only ${1} available and it's in ${((faker.random.number()) % 5) + 1} people's carts.` : '',
              },
            ],
            image: imageUrls[i % 4][i % 6],
            price: faker.commerce.price(),
            productSeller: faker.internet.userName(),
            availability: faker.random.number() % 2 === 1 && faker.random.number() % 5 > 0 ? `Only ${1} available and it's in ${((faker.random.number()) % 5) + 1} people's carts.` : '',
          }),
        );
      }
      Product.create(products, (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Successfully seeded the database.');
        }
      });
    }
  });
};

seed(100);
