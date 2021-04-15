const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('<h1>hola clase</h1>');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

module.exports = app;
