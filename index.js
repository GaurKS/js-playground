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
app.use(morgan('common'))
app.use((req, _, next) => {
  req.client = dbClient();
  next();
});

// log only 4xx and 5xx responses to access.log
app.use(morgan('combined', {
  skip: function (req, res) { return res.statusCode < 400 },
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' }),
}))

// TODO: setup the logger for exceptions. custom morgan logging format

app.get('/test', (req, res) => {
  console.log(req.client);
  res.send('Hello World!');
});


// routing
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/todo', todoRoutes);

(
  async () => {
    await dbInit();
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}...🚀`);
    })
  }
)();