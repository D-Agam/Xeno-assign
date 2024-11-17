// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const customerRoutes = require('./Routes/customerRoutes');
const orderRoutes = require('./Routes/orderRoutes');
const campaignRoutes = require('./Routes/campaignRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/campaigns', campaignRoutes);

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(3000, () => console.log('Server running on http://localhost:3000'));
});
