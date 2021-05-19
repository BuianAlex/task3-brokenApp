const express = require('express');
require('dotenv').config();
const { API_PORT } = process.env;
const app = express();
const db = require('./db');
const user = require('./controllers/usercontroller');
const game = require('./controllers/gamecontroller');

db.sync();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'));
app.use('/api/game', game);
app.listen(API_PORT, () => {
  console.log('App is listening on 4000');
});
