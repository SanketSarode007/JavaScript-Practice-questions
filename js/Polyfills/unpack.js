/*
 Input: “a.b.c.d.e”
 Output: {a: {b: {c: {d: e}}}}
*/

const inputString = "a.b.c.d.e"

function unpack(str){
	let obj = {};
	
	const strArray = str.split('.');
	console.log(strArray)
	
	strArray.forEach(function(char){
		const n = {[char]: obj}
		obj = n;
	})
	
	return obj;
}

console.log(unpack(inputString));