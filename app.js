const express = require('express');
require('dotenv').config();

const { API_PORT } = process.env;
const app = express();
const db = require('./db');
const user = require('./controllers/usercontroller');
const game = require('./controllers/gamecontroller');
const validateSession = require('./middleware/validate-session');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use('/api/auth', user);
app.use(validateSession);
app.use('/api/game', game);

db.authenticate()
  .then(() => {
    console.log('Connected to DB');
    return db.sync();
  })
  .then(() => {
    app.listen(API_PORT, () => {
      console.log(`App is listening on ${API_PORT}`);
    });
  })
  .catch((err) => {
    console.error(`Error: ${err}`);
    process.exit(1);
  });
