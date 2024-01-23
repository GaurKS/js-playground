// importing dependencies
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

// importing configs
const config = require('./config/config.js');

// importing routes
const authRoutes = require('./routes/auth.router.js');
const todoRoutes = require('./routes/todo.router.js');
const { dbInit, dbClient } = require('./config/db.config.js');


// setting up the express app middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// log only 4xx and 5xx responses to access.log
app.use(morgan('dev'));
app.use(morgan('combined', {
  skip: function (req, res) { return res.statusCode < 400 },
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' }),
}));

// setting mongodb client to req.client
app.use((req, _, next) => {
  req.client = dbClient();
  next();
});

// routing
app.get('/check', (req, res) => {
  console.log(req.client);
  res.status(200).send('Server is up and running. Status OK!');
});
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/todo', todoRoutes);

// initializing the server
(
  async () => {
    await dbInit();
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}...🚀`);
    })
  }
)();