const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var todoId = '5a6546bb09848e64c7ea383c11';
//
// if(!ObjectID.isValid(todoId)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: todoId
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: todoId
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(todoId).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo)
// }).catch((e) => console.log(e));

var userId = '5a618f931462481255075967';

User.findById(userId).then((user) => {
  if(!user){
    return console.log('User Id not found');
  }
  console.log(JSON.stringify(user, undefined, 2))
}, (e) => {
  console.log(e);
});
