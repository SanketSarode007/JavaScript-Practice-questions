function abstractEquality(a,b){
	if(typeof a === typeof b) return a === b;
	
	if(a === undefined && b === null) return true;
	if(b === undefined && a === null) return true;
	
	if(typeof a === 'object'){
		return abstractEquality(String(a),b)
	}
	
	if(typeof b === 'object'){
		return abstractEquality(a, String(b))
	}
	
	return Number(a) === Number(b);
}

checker(1,1)
checker("1",1)
checker([],{})
checker(NaN,undefined)
checker("hi", ["hi"])

checker(null, undefined)
checker([],false)
checker({}, "[object Object]")
checker("", false)
checker(true, 1)

function checker(a,b){
	console.log('og',a == b)
	console.log('ours',abstractEquality(a,b))
	console.log('---')
	
}