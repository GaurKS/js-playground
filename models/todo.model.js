// title, description, status, dueDate, creationDate, orders, tags array
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
