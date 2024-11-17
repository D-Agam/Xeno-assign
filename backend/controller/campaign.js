// backend/controllers/campaignController.js
const CommunicationLog = require('../Models/Comm');
const Customer = require('../Models/Customers');

exports.createAudienceSegment = async (req, res) => {
  const { conditions } = req.body;
  if (!Array.isArray(conditions) || conditions.length === 0) {
    return res.status(400).json({ success: false, message: 'Conditions should be a non-empty array' });
  }

  try {
    let query = { where: {} };

    // Validate conditions and build query
    conditions.forEach(condition => {
      if (!condition.field || !condition.operator || !condition.value) {
        return res.status(400).json({ success: false, message: 'Each condition should have field, operator, and value' });
      }

      // Ensure the operator is a valid Sequelize operator (or use other safe validation as needed)
      query.where[condition.field] = { [condition.operator]: condition.value };
    });

    const audience = await Customer.findAll(query);
    res.status(200).json({ audienceSize: audience.length, audience: audience.map(customer => customer.id) });
  } catch (error) {
    console.error('Error creating audience segment:', error);
    res.status(400).json({ success: false, message: error.message });
  }
};


exports.sendMessage = async (req, res) => {
  const { audienceId, message } = req.body;
  try {
    const logEntry = await CommunicationLog.create({ audienceId, message, status: 'PENDING' });
    const deliveryStatus = Math.random() > 0.1 ? 'SENT' : 'FAILED';
    await CommunicationLog.update({ status: deliveryStatus }, { where: { id: logEntry.id } });
    res.status(200).json({ success: true, status: deliveryStatus });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
