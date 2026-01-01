
function flattenObject(obj, parentKey = '', result = {}) {

    if (typeof obj !== 'object') {
        return "Input value is not object"
    }

    let objKeys = Object.keys(obj)

    // console.log(obj[objKeys]);

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {

            let newKey = parentKey ? `${parentKey}.${key}` : key;

            if (typeof obj[key] === 'object' && obj[key] !== null) {
                flattenObject(obj[key], newKey, result)
            } else {
                result[newKey] = obj[key]
            }

        }

    }

    return result;
}

// Test 1: Basic nested object
const obj1 = { a: { b: { c: 1 } } };
console.log(flattenObject(obj1));
// Expected output: { 'a.b.c': 1 }

// Test 2: Nested object with multiple properties
const obj2 = { a: { b: 2, c: { d: 3 } }, e: 4 };
console.log(flattenObject(obj2));
// Expected output: { 'a.b': 2, 'a.c.d': 3, 'e': 4 }

// Test 3: Object with arrays (if required)
const obj3 = { a: { b: [1, 2], c: 3 }, d: 4 };
console.log(flattenObject(obj3));
// Expected output: { 'a.b': [1, 2], 'a.c': 3, 'd': 4 }

// Test 4: Empty object
const obj4 = {};
console.log(flattenObject(obj4));
// Expected output: {}

// Test 5: Object with null values (if null values should be skipped)
const obj5 = { a: { b: null } };
console.log(flattenObject(obj5));
// Expected output: { 'a.b': null }

// Test 6: Non-object values at top level
const obj6 = { a: 1, b: { c: 2 } };
console.log(flattenObject(obj6));
// Expected output: { 'a': 1, 'b.c': 2 }