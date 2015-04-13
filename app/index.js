
/**
 * Module dependencies
 */

var express = require('express');
var random = require('random');
var quotes = require('../data/quotes.json').quotes;

var app = module.exports = express();


// GET /quote

app.get('/quote', function(req, res) {

  var quote = random(0, quotes.length - 1);

  res.json({
    quote: quotes[quote]
  });

});


// GET /html/quote


app.get('/html/quote', function(req, res) {

  var quote = random(0, quotes.length - 1);

  res.send(`<p>
    Robert Says: <span id="quote">${quotes[quote]}</span>
    </p>`);

});


// Catch 404

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// Error handler

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});
