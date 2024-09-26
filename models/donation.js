const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentId: { type: String, required: true },
  orderId: { type: String, required: true },
  donationDate: { type: Date, default: Date.now },
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
