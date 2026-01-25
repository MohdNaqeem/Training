const { MongoClient } = require('mongodb')
const url = "mongodb+srv://mominnaqeem9860_db_user:SDJZ1EOpNmcn4lBf@practice-mongodb.qrcs9yi.mongodb.net/"
const client = new MongoClient(url);

const dbName = 'practice-database';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  // To read data 
  const data = {
    firstName : "Raza",
    lastName : "Momin",
    phone : 448759839384,
    email : "raza@gmail.com",
    city : "Mumbai"
  }

  const insertResult = await collection.insertMany([data]);
  console.log('Inserted documents =>', insertResult);

  // To find data
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());