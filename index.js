const express = require('express');
const app = express(); // create the app
const port = 3000; // port that it'll be running on

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log('my port' + port);
});
