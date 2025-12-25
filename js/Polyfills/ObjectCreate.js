const villain = {
	name: 'Galactus'
}

const superHero = {
	name: 'Silver Surfer'
}

Object.prototype.myCreate = function(parentObject, keysObject){
	
	function F(){};
	
	F.prototype = parentObject;
	const newObj = new F();
	
	Object.defineProperties(newObj, keysObject)
	
	return newObj;
}

const obj = Object.myCreate(superHero, {origin: {value: 'Yes'}});

console.log(obj);