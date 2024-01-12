const express = require('express');
const router = express.Router();

const { getAllTodos, getTodo, postTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const { runValidation } = require('../validator/index');
const { todoValidator } = require('../validator/todo.validator');

// routing endpoints to middlewares
router.get('/todo', getAllTodos);
router.get('/todo/:id', getTodo);
router.post('/todo', todoValidator, runValidation, postTodo);
router.put('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteTodo);

module.exports = router;