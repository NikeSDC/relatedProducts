const axios = require('axios');
const db = require('./index');
const exampleData = require('../test/exampleData.js');

// seed database with API... images do not work with Nike styling
const getInfo = () => {
  axios.get('https://api.thesneakerdatabase.com/v1/sneakers?limit=100&name=Lebron')
    .then((result) => {
      db.create(result.data.results)
        .then(console.log(result));
    })
    .catch((err) => { console.log(err); });
};

const seedWithExampleData = () => {
  db.create(exampleData)
    .then((result) => { console.log(result); })
    .catch((err) => { console.log(err); });
};

seedWithExampleData();
