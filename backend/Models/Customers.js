const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Customer = sequelize.define('Customer', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // Validates that the email field is a valid email
    },
  },
  totalSpending: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
  visits: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  lastVisit: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

module.exports = Customer;
