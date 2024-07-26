// routes/banquetRequestRoutes.js
const express = require('express');
const router = express.Router();
const banquetRequestController = require('../controllers/banquetRequestController');

// Route to create a new banquet request
router.post('/create', banquetRequestController.createRequest);

module.exports = router;
