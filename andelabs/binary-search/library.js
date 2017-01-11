
'use strict';

(function(){
	Array.prototype.toTwenty = function() {
		return generateArray(1, 20);
	};
	
	Array.prototype.toForty = function() {
		return generateArray(2, 20);
	};
	
	Array.prototype.toOneThousand = function() {
		return generateArray(10, 100);
	};	
	
	Array.prototype.search = function(searchNumber) {
  	let searchObject = {
			index: 0,
      count: 0,
      length: this.length
    }

		let minIndex = 0;
 	  let maxIndex = this.length - 1;
    let currentIndex;

		while (minIndex <= maxIndex) {  
			currentIndex = Math.floor((maxIndex + minIndex) / 2); 

			if (this[maxIndex] === searchNumber) {
				searchObject.index = maxIndex;
				return searchObject;
			} else {
				maxIndex -= 1;
			}

			if (this[minIndex] === searchNumber) {
				searchObject.index = minIndex;
				return searchObject;
			} else {
				minIndex += 1;
			}

			if (this[currentIndex] === searchNumber) {
				searchObject.index = currentIndex;
				return searchObject;
			}	else if (searchNumber < this[currentIndex]) {  
				maxIndex = currentIndex - 1;  
			} else if (searchNumber > this[currentIndex]) {  
				minIndex = currentIndex + 1;  
			}

			searchObject.count++;
		}  

		searchObject.index = -1;
		return searchObject; 
	};
	
	module.exports = Array.prototype.toTwenty();
	module.exports = Array.prototype.toForty();
	module.exports = Array.prototype.toOneThousand();
	
})()

	function generateArray(length, value) {
		let generatedArray = [];

		for (var i = length; i <= (length * value); i += length) {
			generatedArray.push(i);
		}

		return generatedArray;
  }

