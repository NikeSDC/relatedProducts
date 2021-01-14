const axios = require('axios');
const db = require('./index');

// seed database
const getInfo = () => {
  axios.get('https://api.thesneakerdatabase.com/v1/sneakers?limit=100&name=Lebron')
    .then((result) => {
      db.create(result.data.results)
        .then(console.log(result));
    })
    .catch((err) => { console.log(err); });
};

getInfo();
