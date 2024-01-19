const express = require('express');
const { signup, login } = require('../controllers/auth.controller');
const router = express.Router();

// importing validators
const { userSignupValidator, userSigninValidator } = require('../validators/auth.validator');
const { runValidation } = require('../validators/index');

// routing endpoints to middlewares
router.get('/test', (req, res) => {
  res.send('Hello World!');
});
router.post('/register', userSignupValidator, runValidation, signup);
router.post('/login', userSigninValidator, runValidation, login);
// router.post('/reset-password', userResetPassword, runValidation, resetPassword);

module.exports = router;