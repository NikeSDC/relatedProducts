// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/relatedItems', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => { console.log('Connected to mongoose'); })
//   .catch((err) => { console.log(err); });

// const shoeDescriptionSchema = new mongoose.Schema({
//   brand: String,
//   type: { type: String, default: 'Basketball Shoe' },
//   retailPrice: { type: Number, default: 200 },
//   currentPrice: { type: Number, default: null },
//   title: String,
//   media: {
//     smallImageUrl: String,      <---------- Inside of RelatedItems this is being referrenced
//   },
// });

// const shoeDescription = mongoose.model('shoeDescription', shoeDescriptionSchema);

// module.exports = shoeDescription;

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'gregorie2',
  password: 'gregcal1',
  host: '54.176.16.86',
  database: 'relateditems',
  port: 5432,
})
console.log(pool);

module.exports = pool;
