const mongoose = require('mongoose');

const banquetRequestSchema = new mongoose.Schema({
  requesterEmail:{
    type:String,
    required:true
  },
  requesterPhone:{
    type:String,
    required:true
  },
  requesterFullName:{
    type:String,
    required:true
  },
  paymentStatus:{
    type:Boolean,
    default:false
  },
  paymentId:{
    type:String,
    default:null
  },
  price:{
    type:Number,
    default:0

  },
  requestDate: { 
    type: String, 
    default: Date.now 
  },
  eventDate: { 
    type: Date, 
    required: true 
  },
  numberOfGuests: { 
    type: Number, 
    required: true 
  },
  details: { 
    type: String 
  },
  status: {
    type: String,
    enum: [ 'Pending', 'Approved', 'Rejected' ],
    default: 'Pending'
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('BanquetRequest', banquetRequestSchema);
