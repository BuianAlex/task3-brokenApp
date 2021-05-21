const { Sequelize } = require('sequelize');

const { DB, DB_USER, DB_HOST, DB_PORT, DB_PASSWORD } = process.env;

const sequelize = new Sequelize(DB, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
