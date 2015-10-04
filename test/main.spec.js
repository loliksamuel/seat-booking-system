define(['seat-booking-system/main'], function(SeatBookingSystem) {
  'use strict';

  describe('seat-booking-system.main', function() {
    var sbs;

    beforeEach(function() {
      sbs = new SeatBookingSystem();
    });

    it('can book seats from 1 to 5', function() {
      for (var i = 1; i <= 5; i++) {
        expect(sbs.book(i).length).toEqual(i);

      }
    });

    it('seats become unavailable after booking', function() {
      var checkSeatAvailable = function(seat) {
        expect(seat.isAvailable()).toBe(false);
      };

      for (var i = 1; i <= 5; i++) {
        sbs.book(i).forEach(checkSeatAvailable);
      }
    });

  });

});
