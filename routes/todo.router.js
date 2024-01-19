const express = require('express');
const { getAllTodos, createTodo } = require('../controllers/todo.controller');
const router = express.Router();

// importing validators
// const { runValidation } = require('../validators/index');
const { verifyToken } = require('../middlewares/auth.middleware');

// routing endpoints to middlewares
router.get('/test', verifyToken, (req, res) => {
  res.send('Hello World!');
});
router.get('/list', verifyToken, getAllTodos);
router.post('/create', verifyToken, createTodo);
// router.post('/login', userSigninValidator, runValidation, login);
// router.post('/reset-password', userResetPassword, runValidation, resetPassword);

module.exports = router;