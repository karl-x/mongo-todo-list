// TODO. import TODO Model ;-)
const Todo = require('../models/Todo')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/mongo-todo-list'
mongoose.connect(url, {
  useMongoClient: true
})
mongoose.Promise = global.Promise

// create a new TODO and console log the response
function create (params) {
  var {name, description, completed} = params

  var newTodo = new Todo({
    name: name,
    description: description,
    completed: completed
  })

  newTodo.save(function (err, data) {
    if (err) throw err
  })
}

//console.log(Todo + 'im over here');
  // console log the list of all TODOs
function list () {
  Todo.find({}, function (err, ToDoList) {
    if (err) throw err
    console.log(ToDoList)
  })
}

// find the TODO with this id and console log it
function show (id) {
  Todo.find({_id: id}, function (err, ToDoId) {
    if (err) throw err
    console.log(ToDoId)
  })
}

// find the TODO with this id and update it's params. console log the result.
function update (id, params) {
  var {name, description, completed} = params

// UPDATE
var qObj = {
  _id: id
}

var updObj = { $set: {
  name: name,
  description: description,
  completed: completed
}}

Todo.findOneAndUpdate(qObj, updObj, function (err, UpdatedParams) {
  if (err) throw err
  console.log(UpdatedParams)
})}


// find the TODO with this id and destroy it. console log success/failure.
function destroy (id) {
  Todo.findOneAndRemove({_id: id}, function (err, ToDoId) {
    if (err) throw err
    else console.log('Success!')
  })
}
  function destroyAll () {
    Todo.remove({}, function (err, ToDoList) {
      if (err) throw err
      else console.log('Success!')
    })
}

module.exports = {
  create,
  list,
  show,
  update,
  destroy,
  destroyAll
}
