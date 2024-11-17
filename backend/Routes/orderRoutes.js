const express = require('express');
const { addCustomer, getCustomers } = require('../controller/cust_cntrl');
const router = express.Router();

router.post('/', addCustomer);
router.get('/', getCustomers);

module.exports = router;
