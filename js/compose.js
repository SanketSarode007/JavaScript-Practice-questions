
function compose(...callback) {

    return function (initialValue) {
        return callback.reduceRight((acc, fn) => fn(acc), initialValue)
    }
}

const add2 = x => x + 2;
const multiply3 = x => x * 3;

const composed = compose(multiply3, add2); // multiply3(add2(x))
console.log(composed(4));