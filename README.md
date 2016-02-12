Wild-Card Notation
=========

A simple module to assist you with wild-card annotated statements

## Installation

  npm install wild-card-notation --save

## Usage

  var WildCardNotation = require('./wild-card-notation');
  var wildCardNotation = new WildCardNotation();
  // or for custom wild-card indicator (default is '${{', '}}')
  var wildCardNotation = new WildCardNotation('$[[', ']]');

  var wildCardInfestedStr = "hello my name is $[[name]], $[[description]]";
  var values = ['Baymax', 'your personal healthcare companion'];

  console.log(wildCardNotation.setValues(wildCardInfestedStr, values));

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 1.0.0 Initial release