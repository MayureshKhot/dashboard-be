// controllers/banquetRequestController.js
const BanquetRequest = require('../models/BanquetRequest');
const { body, validationResult } = require('express-validator');

// Function to create a new banquet request with validation
exports.addRequest = [
  // Validation middleware
  body('requesterEmail').isEmail().withMessage('Invalid email address'),
  body('requesterPhone').notEmpty().withMessage('Requester phone is required'),
  body('requesterFullName').notEmpty().withMessage('Requester full name is required'),
  body('eventDate').isDate().withMessage('Invalid event date'),
  body('numberOfGuests').isInt({ min: 1 }).withMessage('Number of guests must be a positive integer'),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 0,
        message: 'Validation errors',
        errors: errors.array()
      });
    }

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
  }
];

// Function to get all banquet requests
exports.getRequests = async (req, res) => {
  try {
    const requests = await BanquetRequest.find();
    res.status(200).json({
      status: 1,
      message: 'Banquet requests fetched successfully',
      data: requests
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: 'Error fetching banquet requests',
      error: error.message
    });
  }
};

// Function to get a single banquet request by ID
exports.getSingleRequest = async (req, res) => {
  try {
    const request = await BanquetRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).json({
        status: 0,
        message: 'Banquet request not found'
      });
    }
    res.status(200).json({
      status: 1,
      message: 'Banquet request fetched successfully',
      data: request
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: 'Error fetching banquet request',
      error: error.message
    });
  }
};

// Function to update a banquet request by ID with validation
exports.updateRequest = [
  // Validation middleware
  body('requesterEmail').optional().isEmail().withMessage('Invalid email address'),
  body('requesterPhone').optional().notEmpty().withMessage('Requester phone is required'),
  body('requesterFullName').optional().notEmpty().withMessage('Requester full name is required'),
  body('eventDate').optional().isDate().withMessage('Invalid event date'),
  body('numberOfGuests').optional().isInt({ min: 1 }).withMessage('Number of guests must be a positive integer'),
  body('paymentId').optional().isString().withMessage('Payment ID must be a string'),
  body('price').optional().isFloat({ min: 0 }).withMessage('Price must be a non-negative number'),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 0,
        message: 'Validation errors',
        errors: errors.array()
      });
    }

    try {
      const updatedRequest = await BanquetRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedRequest) {
        return res.status(404).json({
          status: 0,
          message: 'Banquet request not found'
        });
      }
      res.status(200).json({
        status: 1,
        message: 'Banquet request updated successfully',
        data: updatedRequest
      });
    } catch (error) {
      res.status(500).json({
        status: 0,
        message: 'Error updating banquet request',
        error: error.message
      });
    }
  }
];

// Function to delete a banquet request by ID
exports.deleteRequest = async (req, res) => {
  try {
    const deletedRequest = await BanquetRequest.findByIdAndDelete(req.params.id);
    if (!deletedRequest) {
      return res.status(404).json({
        status: 0,
        message: 'Banquet request not found'
      });
    }
    res.status(200).json({
      status: 1,
      message: 'Banquet request deleted successfully',
      data: deletedRequest
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: 'Error deleting banquet request',
      error: error.message
    });
  }
};