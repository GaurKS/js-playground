const { ObjectId } = require('mongodb');

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.todos = [];
  }
}

module.exports = User;