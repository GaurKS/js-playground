const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const config = require('../config/config');
const { ObjectId } = require('mongodb');

// Validating email and generating jwt token
exports.signup = async (req, res) => {
  try {
    const { username, email, confirmPassword, password } = req.body;
    const mongoClient = req.client;

    if (password !== confirmPassword) {
      return res.status(400).json({
        status: 400,
        message: 'Password does not match'
      });
    }

    // check if user with same email exists in user db
    const user = await mongoClient
      .db(config.mongodb_database)
      .collection(config.mongodb_users_collection)
      .findOne({ email });

    if (user) {
      return res.status(409).json({
        status: 409,
        message: 'User Already Exist. Please Login'
      });
    };

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User(username, email, hashPassword);
    const result = await mongoClient.db('todo_manager').collection('users').insertOne(newUser);

    // create jwt token for user
    const token = jwt.sign(
      {
        id: result.insertedId,
        email
      },
      config.jwt_secret, {
      expiresIn: config.jwt_token_expiry
    });

    return res.status(201).json({
      status: 201,
      message: 'User Created Successfully',
      token: token
    });
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      status: 403,
      message: error
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const mongoClient = req.client;

    // check if user with same email exists in user db
    const user = await mongoClient
      .db(config.mongodb_database)
      .collection(config.mongodb_users_collection)
      .findOne({ email });

    if (!user) {
      return res.status(404).json({
        status: 404,
        message: 'User does not exist. Please signup'
      });
    };

    // check if password matches
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        status: 401,
        message: 'Invalid Credentials'
      });
    };

    // create jwt token for user
    const token = jwt.sign(
      { id: user._id, email },
      config.jwt_secret, {
      expiresIn: config.jwt_token_expiry
    });

    return res.status(200).json({
      status: 200,
      message: 'User Logged In Successfully',
      token: token
    });

  } catch (error) {
    console.log(error);
    return res.status(403).json({
      status: 403,
      message: error
    });
  }
}

exports.resetPasswordToken = async (req, res) => {
  try {
    const { email } = req.body;
    const mongoClient = req.client;

    // check if user with same email exists in user db
    const user = await mongoClient
      .db(config.mongodb_database)
      .collection(config.mongodb_users_collection)
      .findOne({ email });

    if (!user) {
      return res.status(404).json({
        status: 404,
        message: 'User does not exist. Please signup'
      });
    };

    // create jwt token for user
    const token = jwt.sign(
      { id: user._id, email },
      config.jwt_reset_secret, {
      expiresIn: config.jwt_reset_pwd_expiry
    });

    return res.status(200).json({
      status: 200,
      message: 'Reset Token Generated Successfully',
      token: token
    });

  } catch (error) {
    console.log(error);
    return res.status(403).json({
      status: 403,
      message: error
    });
  }
}

exports.resetPassword = async (req, res) => {
  try {
    const { token } = req.query;
    const { password } = req.body;
    const mongoClient = req.client;

    if (!token) {
      return res.status(400).json({
        status: 400,
        message: 'Token is required'
      });
    }

    const decodedToken = jwt.verify(token, config.jwt_reset_secret);
    const hashPassword = await bcrypt.hash(password, 10);

    const result = await mongoClient
      .db(config.mongodb_database)
      .collection(config.mongodb_users_collection)
      .updateOne(
        { _id: new ObjectId(decodedToken.id) },
        { $set: { password: hashPassword } }
      );

    if (result.modifiedCount === 0) {
      return res.status(404).json({
        status: 404,
        message: 'Password Reset Failed'
      });
    }

    return res.status(200).json({
      status: 200,
      message: 'Password Reset Successfully'
    });

  } catch (error) {
    console.log(error);
    return res.status(403).json({
      status: 403,
      message: error
    });
  }
}
