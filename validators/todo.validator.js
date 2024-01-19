const { check } = require('express-validator');

exports.todoBodyValidator = [
  check('title')
    .not()
    .isEmpty()
    .withMessage('Title for todo is required'),
  check('description')
    .isString()
    .withMessage('Description must be a string'),
  check('status')
    .not()
    .isEmpty()
    .withMessage('Status is required')
    .isIn(['todo', 'in-progress', 'done'])
    .withMessage('Status must be one of todo, in-progress, done'),
  check('dueDate')
    .not()
    .isEmpty()
    .withMessage('Due date is required'),
  check('priority')
    .not()
    .isEmpty()
    .withMessage('Priority is required')
    .isIn(['low', 'medium', 'high'])
    .withMessage('Priority must be one of low, medium, high'),
  check('tags')
    .isArray()
    .withMessage('Tags must be an array'),
];