const express = require('express');
const { getAllTodos, createTodo, updateTodo, deleteTodo, searchTodos, getSingleTodo } = require('../controllers/todo.controller');
const router = express.Router();

// importing validators and middlewares
const { verifyToken } = require('../middlewares/auth.middleware');
const { todoBodyValidator, updateTodoValidator } = require('../validators/todo.validator');
const { runValidation } = require('../validators');

// routing endpoints to middlewares
router.get('/list', verifyToken, getAllTodos);
router.get('/view/:id', verifyToken, getSingleTodo);
router.get('/search', verifyToken, searchTodos);
router.post('/create', verifyToken, todoBodyValidator, runValidation, createTodo);
router.patch('/update/:id', verifyToken, updateTodoValidator, runValidation, updateTodo);
router.delete('/delete/:id', verifyToken, deleteTodo);

module.exports = router;