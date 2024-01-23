const { check } = require('express-validator');

// TODO: add more validation rules, check custom validations
exports.userSignupValidator = [
  check('username')
    .notEmpty()
    .withMessage('username is required'),
  check('email')
    .notEmpty()
    .isEmail()
    .withMessage('Must be a valid email address'),
  check('password')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  check('confirmPassword')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords must match');
      }
      return true;
    })
];

exports.userSigninValidator = [
  check('email')
    .notEmpty()
    .isEmail()
    .withMessage('Must be a valid email address'),
  check('password')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
];

exports.userResetEmail = [
  check('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('Must be a valid email address')
];

exports.userResetPasswordBody = [
  check('password')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  check('confirmPassword')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords must match');
      }
      return true;
    })
];