const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Customer = require('./');

const CommunicationLog = sequelize.define('CommunicationLog', {
  audienceId: {
    type: DataTypes.INTEGER,
    references: {
      model: Customer,
      key: 'id',
    },
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    validate: {
      isIn: [['PENDING', 'SENT', 'FAILED']], // Ensure only valid statuses are stored
    },
    defaultValue: 'PENDING', // Default value is 'PENDING'
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

module.exports = CommunicationLog;
