const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan');
const path = require('path');
const db = require('../database')

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')))


app.get('/db', (req, res) => {
  db.find({})
    .then((result) => {res.status(200).send(result)})
    .catch((err) => {res.status(400).send(err)})
})


app.post('/db', (req, res) => {
  db.create(req.body)
    .then((result) => {res.status(200).send(result)})
    .catch((err) => {res.status(400).send(err)})
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})