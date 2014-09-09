/**
*
*	COMPUTE: quantiles
*
*
*	DESCRIPTION:
*		- Computes quantiles for an array of values.
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

(function() {
	'use strict';

	// MODULES //

	var isInteger = require( 'validate.io-integer' );


	// QUANTILES //

	/**
	* FUNCTION: quantiles( arr, num )
	*	Computes quantiles for an array of values.
	*
	* @param {Array} arr - array of values
	* @param {Number} num - number of quantiles
	* @returns {Array} quantiles
	*/
	function quantiles( arr, num ) {
		if ( !Array.isArray( arr ) ) {
			throw new TypeError( 'quantiles()::invalid input argument. First argument must be an array.' );
		}
		if ( !isInteger( num ) || num <= 0 ) {
			throw new TypeError( 'quantiles()::invalid input argument. Second argument must be a positive integer.' );
		}
		var numValues = arr.length,
			qValues = new Array( num+1 ),
			vec, id, value;

		// Create a copy of the input array:
		vec = arr.slice();

		// Sort the vector:
		vec.sort( function sort( a, b ) {
			return a - b;
		});

		// 0th quantile is the min:
		qValues[ 0 ] = vec[ 0 ];

		// Max defines the quantile upper bound:
		qValues[ num ] = vec[ numValues-1 ];

		// Get the quantiles...
		for ( var i = 1; i < num; i++ ) {

			// Calculate the vector index marking the quantile:
			id = ( numValues * i / num ) - 1;

			// Is the index an integer?
			if ( id === parseInt( id, 10 ) ) {
				// Value is the average between the value at id and id+1:
				value = ( vec[ id ] + vec[ id+1 ] ) / 2.0;
			} else {
				// Round up to the next index:
				id = Math.ceil( id );
				value = vec[ id ];
			}
			qValues[ i ] = value;
		} // end FOR i
		return qValues;
	} // end FUNCTION quantiles()


	// EXPORTS //

	module.exports = quantiles;

})();