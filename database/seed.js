const db = require('./index')
const axios = require('axios')


// seed database



let getInfo = () => {
  axios.get('https://api.thesneakerdatabase.com/v1/sneakers?limit=100&name=Lebron')
    .then((result) => {
      db.create(result.data.results)
        .then((result) => {console.log(result)})
    })
    .catch((err) => { console.log(err)})
}

getInfo();