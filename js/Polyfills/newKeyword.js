
function SuperHero(name){
	this.name = name;
	this.villain = 'Galactus'
}	

function myNew(ContructorFn, ...args){
	const newObj = {};
	
	Object.setPrototypeOf(newObj, ContructorFn.prototype);
	
	const result = ContructorFn.apply(newObj, args);
	
	return result instanceof Object ? result : newObj
}

const superhero = new SuperHero('Silver Surfer');
const newSuperhero = myNew(SuperHero, 'Iron man')

console.log(superhero);
console.log(newSuperhero);