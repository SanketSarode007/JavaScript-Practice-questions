
function once(callback) {
    let called = false;
    let result;
    return function (...args) {
        if (!called) {
            try {
                result = callback.apply(this, args);
                called = true
            } catch (err) {
                throw err;
            }
        }
        return result;
    }
}

function add(a, b) {
    return a + b;
}

const obj = {
    x: 10,
    getX: once(function () {
        return this.x;
    })
};

const ans = once(add)
console.log(ans(2, 3));
console.log(ans(20, 30));
console.log(obj.getX());