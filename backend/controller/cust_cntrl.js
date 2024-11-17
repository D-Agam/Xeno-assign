// backend/controllers/customerController.js
const Customer = require('../Models/Customers');

exports.addCustomer = async (req, res) => {
  try {
    const { name, email, totalSpending, visits, lastVisit } = req.body;

    // Validate input
    if (!name || !email || typeof totalSpending !== 'number' || typeof visits !== 'number') {
      return res.status(400).json({ success: false, message: 'Name, email, totalSpending, and visits are required and valid' });
    }

    const customer = await Customer.create({ 
      name, 
      email, 
      totalSpending, 
      visits, 
      lastVisit
    });

    res.status(201).json({ success: true, data: customer });
  } catch (error) {
    console.error('Error adding customer:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};
