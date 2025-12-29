
function pipe(...fns) {
    return function (initialValue) {
        return fns.reduce((acc, fn) => fn(acc), initialValue);
    }
}

const add2 = x => x + 2;
const multiply3 = x => x * 3;

const piped = pipe(add2, multiply3); // multiply3(add2(x))
console.log(piped(4));