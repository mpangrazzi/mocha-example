
/**
 * Module dependencies
 */

var random = require('random');

// Should assertions
// http://shouldjs.github.io


describe('Random module', function() {

  it('Should get a random number in interval [min, max]', function() {
    var min = 1;
    var max = 10;

    var res = random(min, max);
    res.should.be.within(min, max);
  });

});
