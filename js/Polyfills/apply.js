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

Function.prototype.myApply = function(thisArg, arg=[]){
	const context = thisArg || globalThis
	const key = Symbol();
	context[key] = this;
	const result = context[key](...arg);
	delete context[key]
	return result
}

showVillan.myApply(villain);
showVillan.myApply(anotherVillian);
showVillan.myApply();