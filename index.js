const express = require('express');

const app = express();
<<<<<<< Updated upstream

PORT = process.env.PORT || 3000;
=======
const PORT =  process.env.PORT || 3000;
>>>>>>> Stashed changes

app.get('/', function (req, res) {
  res.send('<h1>hola clase</h1>');
});

app.listen(PORT, () => {
<<<<<<< Updated upstream
  console.log(`Servidor a la escucha en puerto: ${PORT}...`);
});
=======
  console.log(`Servidor escuchando en puerto: ${PORT} ...`);
});


>>>>>>> Stashed changes

module.exports = app;
