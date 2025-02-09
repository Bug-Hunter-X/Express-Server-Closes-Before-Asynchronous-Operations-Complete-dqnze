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
  // Keep the server alive until the timeout completes.  This is a simple solution, and other techniques may be needed for more complex async operations.
  process.on('SIGINT', () => {
    console.log('Server shutting down...');
    setTimeout(() => {
      process.exit(0);
    }, 5000);
  });
});