function memoize(callback, expireAt){

    const cache = new Map
    
    return function (...args){
        const key = JSON.stringify(args)
        const now = new Date();
        
        if(cache.has(key)){
            const {value, time} = cache.get(key);

            if(now - time < expireAt){
              return value   
            }
        }

        const result = callback(...args)
        cache.set(key, {value: result, time: now})

        return result;
    }
}

const slowAdd = (a, b) => {
  console.log("Computing...");
  return a + b;
};

const fastAdd = memoize(slowAdd, 1000);
console.log(fastAdd(2,3));
console.log(fastAdd(2,3));