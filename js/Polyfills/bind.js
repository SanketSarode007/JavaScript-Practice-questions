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

Function.prototype.myBind = function(thisArg, ...args){
	const context = thisArg || globalThis
	const self = this;
	return function(){
		const key = Symbol()
		context[key] = self;
		const result = context[key](...args)
		delete context[key];
		return result
	}
}

const fn = showVillan.myBind(villain)
fn();