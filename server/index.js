const express = require('express');

const app = express();
const port = 3004;
const morgan = require('morgan');
const path = require('path');
const db = require('../database');
// const bundle = require('../client/public/bundle.js');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/api/relatedProducts/db', (req, res) => {
  db.find({})
    .then((result) => { res.status(200).send(result); })
    .catch((err) => { res.status(400).send(err); });
});

// server files for proxy server
// app.get('/relatedProducts', (req, res) => {
//   // res.status(200).send(bundle)
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
