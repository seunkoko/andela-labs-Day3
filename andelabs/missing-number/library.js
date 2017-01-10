
	'use strict'

	module.exports = {

		findMissing: function (array1, array2) {		
			if (typeof (array1) !== "object" || typeof (array2) !== "object") 
				return "Tests for arrays";

			if ((array1.length === 0 && array2.length === 0) || (array1.length === 1 && array2.length === 1)) 	
				return 0;

			let sumArray1 = returnSumOfArray(array1);
			let sumArray2 = returnSumOfArray(array2);
			let response = (array1.length > array2.length) ? (sumArray1 - sumArray2) : (sumArray2 - sumArray1);

			return response;
		}

	}

	function returnSumOfArray(arrayToSum) {
		let sum = 0;

    for (let i = 0; i < arrayToSum.length; i++) {
      sum += arrayToSum[i];
    }

    return sum;
	}

