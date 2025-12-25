const arr = [1,2,7,4,5];
const a = [1,,,3,,5];

Array.prototype.myReduce = function(callback,initialValue){
	
	if(typeof callback !== 'function'){
		throw new TypeError(`${callback} is not a function`)
	}
	
	if(!this.length && !initialValue){
		throw new TypeError('Reduce of empty array with no initial value.')
	}
	
	let flag = 0;
	
	let acc,curr;
	
	if(initialValue !== undefined){
		acc = initialValue;
		while(flag < this.length){
			const curr = this[flag];
			acc = callback(acc,curr)
			flag++;
		}
	}else{
		acc = this[flag];
		flag++;
		while(flag < this.length){
			if(this.hasOwnProperty(flag)){
				curr = this[flag];
				acc = callback(acc,curr)
			}
			flag++;
		}
		
	}
	
	return acc;
}

function sum(acc,current){
	return acc + current;
}

function max(acc,current){
	return Math.max(acc,current);
}

const result1 = arr.myReduce(sum)
const result2 = arr.myReduce(max);
const result3 = a.myReduce(sum);
console.log(result1);
console.log(result2);
console.log(result3);