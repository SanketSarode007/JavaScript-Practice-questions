const animals = ["Lion", "Elephant", "Tiger", "Giraff", "Beer"]

Array.prototype.mySlice = function(start, end){
	
	let length = this.length;
	
	//normalize the value of the start
	if(start === undefined){
		start = 0;
	}else if(start < 0){
		const newIdx = length + start;
		start = Math.max(newIdx,0)
	}else{
		start = Math.min(start, length);
	}
	
	//normalize the value of the end
	if(end === undefined){
		end = length;
	}else if(end < 0){
		const newIdx = length + end;
		end = Math.max(newIdx, 0)
	}else{
		end = Math.min(end, length);
	}
	
	let result = [];
	
	for(let i = start; i < end; i++){
		const value = this[i];
		result.push(value)
	}
	return result
}

const result = animals.slice(-2);
const result2 = animals.mySlice(-2);
console.log(result)
console.log(result2)