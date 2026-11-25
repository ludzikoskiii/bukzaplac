const express = require('express');
const app = express()
const port = 3000
const path = require('path');

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

app.get('/coupons', (req, res) => {
  res.render('coupons', { title: 'Express' });
});

app.get('/charts', (req, res) => {
  res.render('charts', { title: 'Express' });
});

app.get('/settings', (req, res) => {
  res.render('settings', { title: 'Express' });
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

app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});