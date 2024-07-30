// controllers/banquetRequestController.js
const BanquetRequest = require('../models/BanquetRequest');



// Function to get the total number of requests
exports.getRequestCounts = async (req, res) => {
  try {
    const count = await BanquetRequest.countDocuments();
    res.status(200).json({
      status: 1,
      message: 'Request count fetched successfully',
      count
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: 'Error fetching request count',
      error: error.message
    });
  }
};

// Function to get the total earnings
exports.getTotalEarnings = async (req, res) => {
  try {
    const totalEarnings = await BanquetRequest.aggregate([
      { $match: { status: 'Approved' } },
      { $group: { _id: null, total: { $sum: '$price' } } }
    ]);
    const earnings = totalEarnings.length > 0 ? totalEarnings[0].total : 0;
    res.status(200).json({
      status: 1,
      message: 'Total earnings fetched successfully',
      totalEarnings: earnings
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: 'Error fetching total earnings',
      error: error.message
    });
  }
};

// Function to get the total number of users
exports.getUserCounts = async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.status(200).json({
      status: 1,
      message: 'User count fetched successfully',
      count
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: 'Error fetching user count',
      error: error.message
    });
  }
};