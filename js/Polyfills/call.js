const villain = {
	name: 'Galactus'
}

const anotherVillian = {
	name: 'Dr. Doom'
}

window.name = 'Thanos'

function showVillan(){
	console.log(this.name)
}

Function.prototype.myCall = function(thisArg, ...args){
	const self = thisArg || globalThis
	const key = Symbol()
	self[key] = this;
	const result = self[key](...args)
	delete self[key]
	return result
}

function myCall(Fn, thisArg, ...args){
	thisArg.fn = Fn;
	console.log(thisArg.fn);
	const result = thisArg.fn(...args);
	delete thisArg.fn
	return result
}

showVillan.myCall(window)
showVillan.myCall(villain)
showVillan.myCall(anotherVillian)
showVillan.myCall();