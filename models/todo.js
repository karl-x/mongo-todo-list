// Mongoose Schema and Models goes here
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//  Create Schema
const todoSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  completed: String
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
