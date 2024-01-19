require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  mongodb_uri: process.env.MONGODB_URI,
  jwt_secret: process.env.JWT_SECRET,
  jwt_token_expiry: process.env.JWT_TOKEN_EXPIRY,
};