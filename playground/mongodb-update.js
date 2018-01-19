//const MongoClient = require('mongodb').MongoClient;
//destructuring version of the previous statement
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');



  // const myDB = db.db('TodoApp');
  // myDB.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a61778ae67a9f170191affd')
  // }, {
  //   $set: {
  //       completed: true
  //   }
  // }, {
  //     returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  const myDB = db.db('TodoApp');
  myDB.collection('Users').findOneAndUpdate(
    { name: 'Jasmin' },       //filter
    { $set: {name: 'Diego'},  //update
      $inc: {age: 1 }
    },
    { returnOriginal: false } //options
  ).then((result) => {
    console.log(result);
  });

  //db.close();
});
