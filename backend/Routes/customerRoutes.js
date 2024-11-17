const express = require('express');
const router = express.Router();
const { addCustomer } = require('../controller/cust_cntrl');

// POST route to add customer
router.post('/add-customer', addCustomer);

module.exports = router;
