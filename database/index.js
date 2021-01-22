const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/relatedItems', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('Connected to mongoose'); })
  .catch((err) => { console.log(err); });

const shoeDescriptionSchema = new mongoose.Schema({
  brand: String,
  colorway: String,
  gender: String,
  name: String,
  retailPrice: { type: Number, default: 200 },
  currentPrice: { type: Number, default: null },
  shoe: String,
  title: String,
  year: Number,
  media: {
    imageUrl: String,
    smallImageUrl: String,
    thumbUrl: String,
  },
});

const shoeDescription = mongoose.model('shoeDescription', shoeDescriptionSchema);

module.exports = shoeDescription;
