const mongoose = require('mongoose');

const banquetRequestSchema = new mongoose.Schema({
  requesterName: { type: String, required: true },
  requestDate: { type: Date, default: Date.now },
  eventDate: { type: Date, required: true },
  numberOfGuests: { type: Number, required: true },
  details: { type: String },
  status: { 
    type: String, 
    enum: ['Pending', 'Approved', 'Rejected'], 
    default: 'Pending' 
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const BanquetRequest = mongoose.model('BanquetRequest', banquetRequestSchema);

module.exports = BanquetRequest;
