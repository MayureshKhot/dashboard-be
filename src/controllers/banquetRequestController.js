// controllers/banquetRequestController.js
const BanquetRequest = require('../models/BanquetRequest');

// Function to create a new banquet request
exports.createRequest = async (req, res) => {
  try {
    const newRequest = new BanquetRequest(req.body);
    const savedRequest = await newRequest.save();
    res.status(201).json({
      status: 1,
      message: 'Banquet request created successfully',
      data: savedRequest
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: 'Error creating banquet request',
      error: error.message
    });
  }
};
