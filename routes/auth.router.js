const express = require('express');
const { signup, login, resetPasswordToken, resetPassword } = require('../controllers/auth.controller');
const router = express.Router();

// importing validators
const { userSignupValidator, userSigninValidator, userResetEmail, userResetPasswordBody } = require('../validators/auth.validator');
const { runValidation } = require('../validators/index');

// routing endpoints to middlewares
router.post('/register', userSignupValidator, runValidation, signup);
router.post('/login', userSigninValidator, runValidation, login);
router.post('/forget-password', userResetEmail, runValidation, resetPasswordToken);
router.post('/reset-password', userResetPasswordBody, runValidation, resetPassword);

module.exports = router;