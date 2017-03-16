var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Customer = require('../models/customer.js');

/* SAVE PRODUCT */
router.post('/', function(req, res, next) {
  Customer.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;