const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('index.html');
})
app.get('/hello', (req, res) => {
  res.send('Hello world!!');
})
app.listen(4245, () => {
  console.log('Example app listenting on port 4245!');
});
