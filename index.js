const express = require('express');
const app = express(); // create the app
const port = 3000; // port that it'll be running on

/*app.get('/', (req, res) => {
  res.send('default route');
});*/

/*app.get('/newEndPoint', (req, res) => {
  res.send('new end-point');
});*/

app.get('/Products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000,
    },
    {
      name: 'Product 2',
      price: 2000,
    },
  ]);
});

app.get('/Products/:id', (req, res) => {
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
