/**
*
*	COMPUTE: quantiles
*
*
*	DESCRIPTION:
*		- Computes quantiles for numeric array.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isObject = require( 'validate.io-object' ),
	isInteger = require( 'validate.io-integer' );


// FUNCTIONS //

/**
* FUNCTION: ascending( a, b )
*	Comparator function used to sort values in ascending order.
*
* @private
* @param {Number} a
* @param {Number} b
* @returns {Number} difference between `a` and `b`
*/
function ascending( a, b ) {
	return a - b;
} // end FUNCTION ascending()


// QUANTILES //

/**
* FUNCTION: quantiles( arr, num[, opts] )
*	Computes quantiles for a numeric array.
*
* @param {Array} arr - array of values
* @param {Number} num - number of quantiles
* @param {Object} [options] - function options
* @returns {Array} quantiles
*/
function quantiles( arr, num, opts ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'quantiles()::invalid input argument. First argument must be an array.' );
	}
	if ( !isInteger( num ) || num <= 0 ) {
		throw new TypeError( 'quantiles()::invalid input argument. Second argument must be a positive integer.' );
	}
	if ( arguments.length > 2 ) {
		if ( !isObject( opts ) ) {
			throw new TypeError( 'quantiles()::invalid input argument. Options should be an object.' );
		}
		if ( opts.hasOwnProperty( 'sorted' ) && typeof opts.sorted !== 'boolean' ) {
			throw new TypeError( 'quantiles()::invalid input argument. Sorted flag must be a boolean.' );
		}
		if ( opts.hasOwnProperty( 'method' ) && typeof opts.method !== 'string' ) {
			throw new TypeError( 'quantiles()::invalid input argument. Method must be a string.' );
		}
		// TODO: validate that the requested method is supported. list.indexOf( method )
	} else {
		opts = {};
	}
	var len = arr.length,
		qValues = new Array( num+1 ),
		id,
		val;

	if ( !opts.sorted ) {
		arr = arr.slice();
		arr.sort( ascending );
	}

	// 0th quantile is the min:
	qValues[ 0 ] = arr[ 0 ];

	// Max defines the quantile upper bound:
	qValues[ num ] = arr[ len-1 ];

	// Get the quantiles...
	for ( var i = 1; i < num; i++ ) {

		// Calculate the vector index marking the quantile:
		id = ( len * i / num ) - 1;

		// Is the index an integer?
		if ( id === Math.floor( id ) ) {
			// Value is the average between the value at id and id+1:
			val = ( arr[ id ] + arr[ id+1 ] ) / 2.0;
		} else {
			// Round up to the next index:
			id = Math.ceil( id );
			val = arr[ id ];
		}
		qValues[ i ] = val;
	} // end FOR i
	return qValues;
} // end FUNCTION quantiles()


// EXPORTS //

module.exports = quantiles;
