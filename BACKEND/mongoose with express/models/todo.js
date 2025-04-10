import mongoose from 'mongoose';


const todoSchema = new mongoose.Schema({
  title: String, 
  author: String,
  body: String
});


export const Todo = mongoose.model('todo',todoSchema);