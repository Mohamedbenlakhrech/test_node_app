const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('index.html');
})

app.listen(3000, () => {
  console.log('Example app listenting on port 3000!');
});
