const productsRouter = require('./products.router');

const routerApi = (app) => {
  app.use('/products', productsRouter);
  //app.use('/categories', categoriesRouter);
  //app.use('/users', users);
};

module.exports = routerApi;
