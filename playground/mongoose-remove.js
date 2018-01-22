const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({}): remove multiple records
// Todo.remove({}).then((result) => {
//   console.log(result)
// });

//Todo.findOneAndRemove({});
//Todo.findByIdAndRemove();

// Todo.findOneAndRemove({_id: '5a665615e67a9f170191f583'}).then((todo) => {
//   console.log(todo);
// });

// Todo.findByIdAndRemove('5a6655a4e67a9f170191f56d').then((todo) => {
//   console.log(todo);
// });
