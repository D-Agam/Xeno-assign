const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Customer = require('./Customers');
const Order = sequelize.define('Order', {
  customerId: {
    type: DataTypes.INTEGER,
    references: {
      model: Customer,
      key: 'id',
    },
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  orderDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

Order.belongsTo(Customer, { foreignKey: 'customerId' });

module.exports = Order;
