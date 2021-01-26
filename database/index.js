const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/relatedItems', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('Connected to mongoose'); })
  .catch((err) => { console.log(err); });

const shoeDescriptionSchema = new mongoose.Schema({
  brand: String,
  type: { type: String, default: 'Basketball Shoe' },
  retailPrice: { type: Number, default: 200 },
  currentPrice: { type: Number, default: null },
  title: String,
  media: {
    smallImageUrl: String,
  },
});

const shoeDescription = mongoose.model('shoeDescription', shoeDescriptionSchema);

module.exports = shoeDescription;
