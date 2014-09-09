Quantiles
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes quantiles for an array of values.


## Installation

``` bash
$ npm install compute-quantiles
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var quantiles = require( 'compute-quantiles' );
```


## Examples

``` javascript
var data = new Array( 1000 );

for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random()*100;
}

console.log( quantiles( data, 10 ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Notes

This method returns the 0th and 100th quantiles; a.k.a., the min and the max. For example, when computing the median,

``` javascript
var data = new Array( 11 );

for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = i+1;
}

console.log( quantiles( data, 2 ) );
// Returns [1,6,11]
```

the method returns `[1,6,11]`, where `min = 1`, `max = 11`, and `median = 6`. Accordingly, you should expect the output to be an `array` with `length = n + 1`, where `n` is the number of quantiles. 



## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-quantiles.svg
[npm-url]: https://npmjs.org/package/compute-quantiles

[travis-image]: http://img.shields.io/travis/compute-io/quantiles/master.svg
[travis-url]: https://travis-ci.org/compute-io/quantiles

[coveralls-image]: https://img.shields.io/coveralls/compute-io/quantiles/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/quantiles?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/quantiles.svg
[dependencies-url]: https://david-dm.org/compute-io/quantiles

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/quantiles.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/quantiles

[github-issues-image]: http://img.shields.io/github/issues/compute-io/quantiles.svg
[github-issues-url]: https://github.com/compute-io/quantiles/issues