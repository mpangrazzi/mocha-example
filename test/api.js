
/**
 * Module dependencies
 */

var http = require('http');
var request = require('superagent');

var app = require('../app');
var quotes = require('../data/quotes.json').quotes;

var server = http.createServer(app);
var port = process.env.PORT || 3000;


describe('API', function() {

  before(function(done) {
    server.listen(port, done);
  });

  after(function(done) {
    server.close(done);
  });


  it('Should get a Robert Baratheon quote', function(done) {

    request
      .get('http://localhost:3000/quote')
      .end(function(err, res) {

        (err === null).should.be.true;
        res.status.should.equal(200);
        quotes.should.containEql(res.body.quote);

        done();

      });

  });


  it('Should get a 404 error', function(done) {

    request
      .get('http://localhost:3000/bee')
      .end(function(err, res) {

        err.status.should.equal(404);
        done();

      });

  });

});
