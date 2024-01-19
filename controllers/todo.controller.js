const config = require('../config/config');
const todo = require('../models/todo.model');

exports.getAllTodos = async (req, res) => {
  try {
    const mongoClient = req.client;
    const user = req.user;
    const todos = await mongoClient.db('todo_manager').collection('todos').find({ owner: user.id }).toArray();
    return res.status(200).json({
      status: 200,
      message: 'Todos fetched successfully',
      data: todos
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: error
    });
  };
}

exports.createTodo = async (req, res) => {
  try {
    const mongoClient = req.client;
    const user = req.user;
    const { title, description } = req.body;

    const newTodo = new todo.Todo(
      title,
      description,
      config.todo_status[0],
      new Date(),
      new Date(),
      config.todo_priority[0],
      [],
      user.id
    );
    const todo = await mongoClient.db('todo_manager').collection('todos').insertOne({ title, description, owner: user.id });
    return res.status(201).json({
      status: 201,
      message: 'Todo created successfully',
      data: todo.ops[0]
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: error
    });
  };
}