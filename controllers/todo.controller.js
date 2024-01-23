const config = require('../config/config');
const Todo = require('../models/todo.model');
const { ObjectId } = require('mongodb');

exports.getAllTodos = async (req, res) => {
  try {
    const mongoClient = req.client;
    const user = req.user;

    const todos = await mongoClient
      .db(config.mongodb_database)
      .collection(config.mongodb_todos_collection)
      .find({ owner: user.id })
      .project({ title: 1, status: 1, dueDate: 1, priority: 1 })
      .toArray();

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

exports.getSingleTodo = async (req, res) => {
  try {
    const mongoClient = req.client;
    const { id } = req.params;
    const user = req.user;

    const todo = await mongoClient
      .db(config.mongodb_database)
      .collection(config.mongodb_todos_collection)
      .findOne({
        _id: new ObjectId(id),
        owner: user.id
      });

    if (!todo) {
      return res.status(404).json({
        status: 404,
        message: 'Todo not found'
      });
    }

    return res.status(200).json({
      status: 200,
      message: 'Todo fetched successfully',
      data: todo
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
    const { title, description, status, dueDate, priority, tags } = req.body;

    const newTodo = new Todo(
      title,
      description,
      status,
      dueDate,
      new Date(), // date of creation
      priority,
      tags,
      user.id
    )

    const todo = await mongoClient
      .db(config.mongodb_database)
      .collection(config.mongodb_todos_collection)
      .insertOne(newTodo);

    await mongoClient.db(config.mongodb_database)
      .collection(config.mongodb_users_collection)
      .updateOne({
        email: user.email
      }, {
        $push: {
          todos: todo.insertedId
        }
      });

    return res.status(201).json({
      status: 201,
      message: 'Todo created successfully',
      data: todo
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: error.message
    });
  };
}

exports.updateTodo = async (req, res) => {
  try {
    const mongoClient = req.client;
    const user = req.user;
    const { id } = req.params;
    const { title, description, status, dueDate, priority, tags } = req.body;

    const todo = await mongoClient
      .db(config.mongodb_database)
      .collection(config.mongodb_todos_collection)
      .findOne({ _id: new ObjectId(id), owner: user.id });

    if (!todo) {
      return res.status(404).json({
        status: 404,
        message: 'Todo not found'
      });
    }

    await mongoClient.db(config.mongodb_database)
      .collection(config.mongodb_todos_collection)
      .updateOne({ _id: new ObjectId(id), owner: user.id }, {
        $set: {
          title: title || todo.title,
          description: description || todo.description,
          status: status || todo.status,
          dueDate: dueDate || todo.dueDate,
          priority: priority || todo.priority,
          tags: tags || todo.tags
        }
      });

    return res.status(200).json({
      status: 200,
      message: 'Todo updated successfully'
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: error
    });
  };
}

exports.deleteTodo = async (req, res) => {
  try {
    const mongoClient = req.client;
    const user = req.user;
    const { id } = req.params;

    const todo = await mongoClient
      .db(config.mongodb_database)
      .collection(config.mongodb_todos_collection)
      .findOne({ _id: new ObjectId(id), owner: user.id });

    if (!todo) {
      return res.status(404).json({
        status: 404,
        message: 'Todo not found'
      });
    }

    await mongoClient
      .db(config.mongodb_database)
      .collection(config.mongodb_todos_collection)
      .deleteOne({ _id: new ObjectId(id), owner: user.id });

    await mongoClient
      .db(config.mongodb_database)
      .collection(config.mongodb_users_collection)
      .updateOne({ email: user.email }, { $pull: { todos: new ObjectId(id) } });

    return res.status(200).json({
      status: 200,
      message: 'Todo deleted successfully',
      data: todo
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: error
    });
  };
}

exports.searchTodos = async (req, res) => {
  try {
    const mongoClient = req.client;
    const user = req.user;
    const { tags, title, priority, status, sort } = req.query;

    const searchQuery = {
      owner: user.id
    };

    if (title) {
      searchQuery.title = { $regex: title, $options: 'i' };
    };

    if (tags) {
      searchQuery.tags = { $all: tags.split(',') };
    };

    if (priority) {
      searchQuery.priority = priority;
    };

    if (status) {
      searchQuery.status = status;
    };

    const todos = await mongoClient
      .db(config.mongodb_database)
      .collection(config.mongodb_todos_collection)
      .find(searchQuery)
      .sort({ dueDate: sort || 1 })
      .toArray();

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