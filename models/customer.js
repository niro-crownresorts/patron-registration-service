var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,    
  title: String,
  job: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('customer', CustomerSchema);