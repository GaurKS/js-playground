const { check } = require('express-validator');

// TODO: add more validation rules, check custom validations
exports.userSignupValidator = [
  check('username')
    .not()
    .isEmpty()
    .withMessage('username is required'),
  check('email')
    .isEmail()
    .withMessage('Must be a valid email address'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  check('confirmPassword')
    .isLength({ min: 6 })
    .withMessage('Confirm password must be at least 6 characters long')
];

exports.userSigninValidator = [
  check('email')
    .isEmail()
    .withMessage('Must be a valid email address'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
];

// exports.userResetPassword = [
//   check('email')
//     .isEmail()
//     .withMessage({ error: 'Must be a valid email address' }),
// ];