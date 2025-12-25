
const arr = [1,2,3,4,5];

Array.prototype.myFilter = function(callbackFn){
	
	if(typeof callbackFn !== 'function'){
		throw new TypeError(`${callbackFn} is not a function`)
	}
	
	const result = [];
	let flag = 0;
	//we have made this flag index to handle the sparse array
	while(flag < this.length){
		
		if(this.hasOwnProperty(flag)){
			const value = this[flag];
			const needToAdd = callbackFn(value, flag, this);
			needToAdd && result.push(value);
		}
		
		flag++;
	}
	
	return result;
	
}

function transformFunction(element, index, arr){
	return element % 2 === 0;
}

const result = arr.myFilter(transformFunction)
console.log(result);