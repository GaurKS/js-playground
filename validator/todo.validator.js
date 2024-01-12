const { check } = require('express-validator');

exports.todoValidator = [
  check('title')
    .not()
    .isEmpty()
    .withMessage('Title is required'),
  check('description')
    .isString()
    .optional(),
  check('status')
    .not()
    .isEmpty()
    .withMessage('Status is required'),
  check('dueDate')
    .not()
    .isEmpty()
    .withMessage('Due date is required'),
  check('tags')
    .isArray()
    .optional()
];