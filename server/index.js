const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

module.exports = app;
// console.log('hello')

app.use(express.static(path.join(__dirname, '..', 'public')));

const server = app.listen(PORT, () => {
  console.log(`You're app is now ready at http://localhost:${PORT}/`);
});
