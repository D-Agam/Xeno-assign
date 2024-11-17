// backend/config/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'x_assign',        // Database name
  'root',            // Database username
  'AgamD@07',        // Database password
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);

module.exports = sequelize;
