var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  cust_name: String,
  cust_title: String,
  cust_dob: Date,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('customer', CustomerSchema);