// controllers/banquetRequestController.js
const BanquetRequest = require('../models/BanquetRequest');

// Function to create a new banquet request
exports.addRequest = async (req, res) => {
  try {
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
exports.addRequest = async (req, res) => {
   try {
   
   
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
}
exports.getRequest = async (req, res) => {
   try {
   
   
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
}
exports.getSingleRequest = async (req, res) => {
   try {
   
   
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
}
exports.updateRequest = async (req, res) => {
   try {
   
   
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
}
exports.deleteRequest = async (req, res) => {
   try {
   
   
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
}