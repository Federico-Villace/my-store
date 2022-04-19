const express = require('express');
const routerApi = require('./routes');
const app = express(); // create the app
const port = 3000; // port that it'll be running on

routerApi(app);

/*app.get('/', (req, res) => {
  res.send('default route');
});*/

/*app.get('/newEndPoint', (req, res) => {
  res.send('new end-point');
});*/

/*app.listen(port, () => {
  console.log('my port: ' + port);
});*/
