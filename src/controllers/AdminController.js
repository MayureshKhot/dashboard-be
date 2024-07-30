// controllers/banquetRequestController.js
const BanquetRequest = require('../models/BanquetRequest');
const { body, validationResult } = require('express-validator');


// Function to update the status of a banquet request by ID
exports.updateRequestStatus = async (req, res) => {
  const { id, status } = req.params;

  // Validate status
  const validStatuses = ['Pending', 'Approved', 'Rejected'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({
      status: 0,
      message: 'Invalid status value. Valid statuses are Pending, Approved, Rejected.'
    });
  }

  try {
    const updatedRequest = await BanquetRequest.findByIdAndUpdate(id, { status }, { new: true });
    if (!updatedRequest) {
      return res.status(404).json({
        status: 0,
        message: 'Banquet request not found'
      });
    }
    res.status(200).json({
      status: 1,
      message: 'Banquet request status updated successfully',
      data: updatedRequest
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: 'Error updating banquet request status',
      error: error.message
    });
  }
};
