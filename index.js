const { response } = require('express');
const express = require('express');
const faker = require('faker');
const app = express(); // create the app
const port = 3000; // port that it'll be running on

/*app.get('/', (req, res) => {
  res.send('default route');
});*/

/*app.get('/newEndPoint', (req, res) => {
  res.send('new end-point');
});*/

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  //example limit

  // /products?size=n

  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

//specific endpoints should go ahead of dinamics
//specific
app.get('/products/filter', (req, res) => {
  res.send('Im the filter');
});
//dinamic
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 1',
    price: 1000,
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.listen(port, () => {
  console.log('my port: ' + port);
});

//query parameters

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    response.json({
      limit,
      offset,
    });
  } else {
    res.send('There is no parameters');
  }
});
