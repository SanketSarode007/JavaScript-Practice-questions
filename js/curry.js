
function curry(callback){
    return function curied(...args){
        if(args.length >= callback.length){            
            return callback.apply(this, args)
        }else{
            return function(...nextArgs){                
               return curied.apply(this, args.concat(nextArgs))
            }
        }
    }
}

function add(a,b,c){
    return a + b + c
}

const curiedAdd =  curry(add)
console.log(curiedAdd(1,5)(2));
console.log(curiedAdd(1)(2)(3));
console.log(curiedAdd(1)(2,3));