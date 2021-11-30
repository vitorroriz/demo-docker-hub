const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Docker');
});

app.listen(8080, () => {
  console.log('Sever is Listening on port 8080');
});
