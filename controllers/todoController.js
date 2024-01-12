const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const todosPath = path.join(process.cwd(), 'todos.json');

exports.getAllTodos = async (req, res) => {
  try {
    const todos = JSON.parse(fs.readFileSync(todosPath));
    if (todos.length === 0) throw new Error('No todos found');
    res.status(200).send({
      status: 'success',
      data: todos
    });
  } catch (error) {
    res.status(400).send({
      status: 'fail',
      message: error.message
    });
  }
}

exports.getTodo = async (req, res) => {
  try {
    const todos = JSON.parse(fs.readFileSync(todosPath));
    const todo = todos.find(todo => todo.id === req.params.id);
    if (!todo) throw new Error('Todo not found! Invalid todo Id.');
    res.status(200).send({
      status: 'success',
      data: todo
    });
  } catch (error) {
    res.status(400).send({
      status: 'fail',
      message: error.message
    });
  }
}

exports.postTodo = async (req, res) => {
  try {
    const todos = JSON.parse(fs.readFileSync(todosPath));
    const newTodo = { ...req.body, id: uuidv4() };
    todos.push(newTodo);
    fs.writeFileSync(todosPath, JSON.stringify(todos));
    res.status(201).send({
      status: 'success',
      data: newTodo
    });
  } catch (error) {
    res.status(400).send({
      status: 'fail',
      message: error.message
    });
  }
}

exports.updateTodo = async (req, res) => {
  try {
    const todos = JSON.parse(fs.readFileSync(todosPath));
    const todoIndex = todos.findIndex(todo => todo.id === req.params.id);
    if (todoIndex === -1) throw new Error('Todo not found! Invalid todo Id.');
    todos[todoIndex] = { ...todos[todoIndex], ...req.body };
    fs.writeFileSync(todosPath, JSON.stringify(todos));
    res.status(200).send({
      status: 'success',
      data: todos[todoIndex]
    });
  } catch (error) {
    res.status(400).send({
      status: 'fail',
      message: error.message
    });
  }
}

exports.deleteTodo = async (req, res) => {
  try {
    const todos = JSON.parse(fs.readFileSync(todosPath));
    const todoIndex = todos.findIndex(todo => todo.id === req.params.id);
    if (todoIndex === -1) throw new Error('Todo not found! Invalid todo Id.');
    todos.splice(todoIndex, 1);
    fs.writeFileSync(todosPath, JSON.stringify(todos));
    res.status(200).send({
      status: 'success',
      data: `Todo with title [${todos[todoIndex].title}] deleted successfully`
    });

  } catch (error) {
    res.status(400).send({
      status: 'fail',
      message: error.message
    });
  }
}



