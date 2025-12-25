
const arr = [1,2,3,4,5];

//value of this depends how you call a function.

Array.prototype.myMap = function(callbackFn){
	
	if(typeof callbackFn !== 'function'){
		throw new TypeError(`${callbackFn} is not a function`)
	}
	
	const result = new Array(this.length);
	let flag = 0;
	
	while(flag < this.length){
		if(this.hasOwnProperty(flag)){
			const value = this[flag];
		    const newValue = callbackFn(value,flag,this);
		    result[flag] = newValue;
		}
		flag++;
	}
	
	return result;
}

function getSquareOfNumber(num){
	return num * num;
}

const result = arr.myMap(getSquareOfNumber);
console.log(result);

//4 test cases to check our polyfill of map
const sample1 = [1,2,3,4];
const sample2 = new Array(10);
const sample3 = [1,,,,2,,,3,,,4];
const sample4 = {length:2, 0: 10, 1: 20, 2: 30};

const result1 = sample1.myMap(d => d*2);
const result2 = sample2.myMap(d => d*2)
const result3 = sample3.myMap(d => d*2)
const result4 = Array.prototype.myMap.call(sample4, d => d*2);

console.log({result1, result2, result3, result4});