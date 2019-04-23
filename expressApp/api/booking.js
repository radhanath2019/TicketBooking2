var express = require('express');
var router = express.Router();
var bookingService = require('../services/bookingdbService');

router.get('/', function(req, res, next) {
    var callback = function(result){
      res.send(result);
    }
    bookingService.getBookings(callback);
  });

  router.post('/', function(req, res, next) {
    var callback = function(result){
      res.send({'result':result});
    }
    var booking = req.body;
    bookingService.addBooking(booking, callback);
  });
  
  router.delete('/:id', function(req, res, next) {
    var callback = function(result){
      res.send({'result':result});
    }
    var bookingId = req.params.id;
    bookingService.deleteBooking(bookingId,callback);
  });
  
  router.get('/:id', function(req, res, next) {
    var callback = function(booking){
      res.send(booking);
    }
    var bookingId = req.params.id;
    var booking = bookingService.getBookingById(bookingId,callback);
  });
  
  router.put('/:id', function(req, res, next) {
    var callback = function(result){
      res.send({'result':result});
    }
    var bookingId = req.params.id;
    var booking = req.body;
    bookingService.updateBooking(booking,callback);
  });



module.exports = router;