const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello');
  setTimeout(() => {
    console.log('World');
  }, 5000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});