// Mongoose Schema and Models goes here
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//  Create Schema
const todoSchema = new Schema ({
  name: String,
  description: String,
  completed: String
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
