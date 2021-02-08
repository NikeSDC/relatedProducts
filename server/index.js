const express = require('express');
const Relic = require('newrelic');
const app = express();
const port = 3004;
const morgan = require('morgan');
const path = require('path');
const db = require('../database');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/api/relatedProducts/db', (req, res) => {
  // db.find({})
  //   .then((result) => { res.status(200).send(result); })
  //   .catch((err) => { res.status(400).send(err); });
  db.query('SELECT * FROM items WHERE product_id > 1000000 LIMIT 10', (err, data) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).send(data.rows)
    }
  })
});

// server files for proxy server
// app.get('/relatedProducts', (req, res) => {
//   // res.status(200).send(bundle)
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
