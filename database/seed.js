// const axios = require('axios');
// const db = require('./index');
// const exampleData = require('../test/exampleData.js');

// // seed database with API... images do not work with Nike styling
// const getInfo = () => {
//   axios.get('https://api.thesneakerdatabase.com/v1/sneakers?limit=100&name=Lebron')
//     .then((result) => {
//       db.create(result.data.results)
//         .then(console.log(result));
//     })
//     .catch((err) => { console.log(err); });
// };

// const seedWithExampleData = () => {
//   db.create(exampleData)
//     .then((result) => { console.log(result); })
//     .catch((err) => { console.log(err); });
// };

// seedWithExampleData();

// brand,type,retailPrice,currentPrice,title,smallImageUrl
// Jordans,10,100,1000,Jordan Max,http://www.google.com/

// Brand, Type, RetailPrice, CurrentPrice, Title, smallImageUrl

const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

const dataGenerator = () => {
  writer.pipe(fs.createWriteStream('database/data.csv'));
  for (var i = 0; i < 10000000; i++) {
    writer.write({
      brand: 'Nike Space Boots',
      type: `Nike ${faker.random.word()}`,
      retailPrice: Number(faker.commerce.price()),
      currentPrice: Number(faker.commerce.price()),
      title: `Nike ${faker.commerce.color()}`,
      smallImageUrl: faker.random.image()
    })
  }
  writer.end();
}
dataGenerator();