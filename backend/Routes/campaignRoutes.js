// backend/routes/campaignRoutes.js
const express = require('express');
const campaignController = require('../controller/campaign');
const router = express.Router();

router.post('/create-audience', campaignController.createAudienceSegment);
router.post('/send-message', campaignController.sendMessage);

module.exports = router;
