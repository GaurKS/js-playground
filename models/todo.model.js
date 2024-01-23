const config = require('../config/config');

// add collection name to class parameter and export
class Todo {
  constructor(title, description, status, dueDate, creationDate, priority, tags, owner) {
    this.title = title;
    this.description = description;
    this.status = status;
    this.dueDate = dueDate;
    this.creationDate = creationDate;
    this.priority = priority;
    this.tags = tags;
    this.owner = owner;
  }
}

Todo.databaseName = config.mongodb_database;
Todo.collectionName = config.mongodb_todos_collection;


module.exports = Todo;