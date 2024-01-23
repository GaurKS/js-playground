require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  mongodb_uri: process.env.MONGODB_URI,
  mongodb_database: process.env.MONGO_DATABASE,
  mongodb_todos_collection: process.env.MONGO_TODO_COLLECTION,
  mongodb_users_collection: process.env.MONGO_USER_COLLECTION,
  jwt_secret: process.env.JWT_SECRET,
  jwt_token_expiry: process.env.JWT_TOKEN_EXPIRY,
  jwt_reset_pwd_expiry: process.env.JWT_RESET_PWD_EXPIRY,
  jwt_reset_secret: process.env.JWT_RESET_SECRET
};