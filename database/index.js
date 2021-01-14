const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/relatedItems', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('Connected to mongoose'); })
  .catch((err) => { console.log(err); });

const shoeDescriptionSchema = new mongoose.Schema({
  brand: String,
  colorway: String,
  gender: String,
  name: String,
  retailPrice: Number,
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
