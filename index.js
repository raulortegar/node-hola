const express = require('express');

const app = express();

<<<<<<< HEAD
const PORT = process.env.PORT || 3000;
=======
PORT = process.env.PORT || 3000;
>>>>>>> ada31befccafe326974ee6afc1dbad420b7e6a35

app.get('/', function (req, res) {
  res.send('<h1>hola clase</h1>');
});

app.listen(PORT, () => {
<<<<<<< HEAD
  console.log(`Server listening on port ${PORT}...`);
=======
  console.log(`Servidor a la escucha en puerto: ${PORT}...`);
>>>>>>> ada31befccafe326974ee6afc1dbad420b7e6a35
});

module.exports = app;
