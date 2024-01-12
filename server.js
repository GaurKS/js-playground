// create a todo-app with all crud api's. Use a file to store the todos instead of a database.
const express = require('express');
const notFound = require('./middlewares/errorMiddleware');

const app = express();

// importing routes
const todoRoutes = require('./routes/todoRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', todoRoutes);
app.use(notFound);

// handling the ports
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});




