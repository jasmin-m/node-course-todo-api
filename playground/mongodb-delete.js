//const MongoClient = require('mongodb').MongoClient;
//destructuring version of the previous statement
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // const myDB = db.db('TodoApp');
  // myDB.collection('Users').find({name: 'Jasmin'}).toArray().then((docs) => {
  //   console.log('Users');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch users', err);
  // });

  // deleteMany
  // const myDB = db.db('TodoApp');
  // myDB.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // const myDB = db.db('TodoApp');
  // myDB.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // const myDB = db.db('TodoApp');
  // myDB.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  const myDB = db.db('TodoApp');
  // myDB.collection('Users').deleteMany({name: 'Jasmin'}).then((result) => {
  //   console.log(result);
  // });
  myDB.collection('Users').findOneAndDelete({
    _id: new ObjectID('5a616449d856a10c313cafce')
  }).then((result) => {
    console.log(result);
  });

  //db.close();
});
