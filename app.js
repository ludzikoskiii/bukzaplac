const express = require('express');
const app = express()
const port = 3000

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

app.get('/log', (req, res) => {
  res.render('log', { title: 'Express' });
});

app.get('/register', (req, res) => {
  res.render('register', { title: 'Express' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});