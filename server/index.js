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
app.get('/loaderio-d1561f5483075c39b583d6dbb4b81f4b/', (req, res) => {
  res.send('loaderio-d1561f5483075c39b583d6dbb4b81f4b');
})

//app.get('/api/relatedProducts/db', (req, res) => {
//let num = Math.floor(Math.random() * Math.floor(1000000));
//console.log(num)
// db.query(`SELECT * FROM items WHERE product_id > 10 LIMIT 10`, (err, data) => {
//    if (err) {
//      console.log('Error in Query');
//      res.status(400).send(err)
//    } else {
//      console.log(data.rows[1]);
//      res.status(200).send(data.rows)
//    }
//  })
//});

app.get('/api/relatedProducts/db', async (req, res) => {
 try {
  let num = Math.floor(Math.random() * Math.floor(9900000));
  const getProducts = await db.query(`SELECT * FROM items WHERE product_id > ${num} LIMIT 10`);
   console.log(getProducts.rows[0], num);
  res.status(200).send(getProducts.rows);
 } catch (err) {
  res.status(400).send(err);
 }
});

// server files for proxy server
// app.get('/relatedProducts', (req, res) => {
//   // res.status(200).send(bundle)
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
