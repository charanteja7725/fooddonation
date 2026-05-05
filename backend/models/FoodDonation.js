const mongoose = require('mongoose');

const foodDonationSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: [true, 'Please provide a food name'],
    trim: true,
  },
  quantity: {
    type: String,
    required: [true, 'Please provide a quantity'],
    trim: true,
  },
  location: {
    type: String,
    required: [true, 'Please provide a location'],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  donorName: {
    type: String,
    trim: true,
  },
  donorPhone: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('FoodDonation', foodDonationSchema);
