// backend/controllers/orderController.js
const Order = require('../Models/Order');
const Customer = require('../Models/Customers');

exports.addOrder = async (req, res) => {
  try {
    const { customerId, amount, orderDate } = req.body;

    // Validate input
    if (!customerId || !amount || !orderDate) {
      return res.status(400).json({ success: false, message: 'customerId, amount, and orderDate are required' });
    }

    // Check if customer exists
    const customer = await Customer.findByPk(customerId);
    if (!customer) {
      return res.status(404).json({ success: false, message: 'Customer not found' });
    }

    // Create the order
    const order = await Order.create({ customerId, amount, orderDate });
    res.status(201).json({ success: true, data: order });
  } catch (error) {
    console.error('Error adding order:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};
