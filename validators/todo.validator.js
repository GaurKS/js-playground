const { check } = require('express-validator');


// TODO: add validation for dueDate and priority
exports.todoBodyValidator = [
  check('title')
    .notEmpty()
    .withMessage('Title for todo is required'),
  check('description')
    .optional()
    .isString()
    .withMessage('Description must be a string'),
  check('status')
    .notEmpty()
    .withMessage('Status is required')
    .isIn(['pending', 'in-progress', 'done'])
    .withMessage('Status must be one of pending, in-progress, done'),
  check('dueDate')
    .notEmpty()
    .withMessage('Due date is required')
    .isISO8601()
    .toDate()
    .withMessage('Due date must be a valid date in [YYYY-MM-DD] format')
    .isAfter(new Date(new Date().setDate(new Date().getDate() - 1)).toISOString())
    .withMessage('Due date must be a date after today'),
  check('priority')
    .notEmpty()
    .withMessage('Priority is required')
    .isIn(['low', 'medium', 'high'])
    .withMessage('Priority must be one of low, medium, high'),
  check('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array'),
];

exports.updateTodoValidator = [
  check('title')
    .optional()
    .isString()
    .withMessage('Title for todo must be a string'),
  check('description')
    .optional()
    .isString()
    .withMessage('Description must be a string'),
  check('status')
    .optional()
    .isIn(['pending', 'in-progress', 'done'])
    .withMessage('Status must be one of pending, in-progress, done'),
  check('dueDate')
    .optional()
    .isISO8601()
    .toDate()
    .withMessage('Due date must be a valid date in [YYYY-MM-DD] format')
    .isAfter(new Date(new Date().setDate(new Date().getDate() - 1)).toISOString())
    .withMessage('Due date must be a date after today'),
  check('priority')
    .optional()
    .isIn(['low', 'medium', 'high'])
    .withMessage('Priority must be one of low, medium, high'),
  check('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array'),
];