// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node app!');
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

