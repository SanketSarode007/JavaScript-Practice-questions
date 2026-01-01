
function deepEqual(a, b) {

    //checking for the same values for the objects or primitive values.
    if (a === b) {
        return true;
    }

    if (a == null || b == null) {
        return false;
    }

    if (typeof a === 'object' && typeof b === 'object') {
        let keyA = Object.keys(a);
        let keyB = Object.keys(b);

        if (keyA.length !== keyB.length) {
            return false;
        }

        for (let key of keyA) {
            if (!keyB.includes(key) || !deepEqual(a[key], b[key])) {
                return false;
            }
        }

        return true;
    }

    // If none of the above conditions apply, the values are not equal
    return false;
}

// Primitive types
console.log(deepEqual(5, 5)); // true
console.log(deepEqual(5, '5')); // false
console.log(deepEqual(true, true)); // true
console.log(deepEqual('hello', 'hello')); // true
console.log(deepEqual('hello', 'world')); // false

// Arrays
console.log(deepEqual([1, 2, 3], [1, 2, 3])); // true
console.log(deepEqual([1, 2, 3], [1, 2])); // false
console.log(deepEqual([1, 2, [3]], [1, 2, [3]])); // true
console.log(deepEqual([1, 2, [3]], [1, 2, [4]])); // false

// Objects
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); // false
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false

// Nested Objects
console.log(deepEqual({ a: { b: { c: 3 } } }, { a: { b: { c: 3 } } })); // true
console.log(deepEqual({ a: { b: { c: 3 } } }, { a: { b: { c: 4 } } })); // false

// Edge cases
console.log(deepEqual(null, null)); // true
console.log(deepEqual(null, undefined)); // false
console.log(deepEqual(undefined, undefined)); // true

// Special case: comparing functions (functions should not be deeply equal)
console.log(deepEqual(function() {}, function() {})); // false