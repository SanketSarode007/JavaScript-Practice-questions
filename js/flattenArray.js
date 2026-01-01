
function flattenArray(array, depth = 1, result = []) {

    if (!Array.isArray(array)) {
        return 'Not an array'
    }

    if (array.length == 0) {
        return result;
    }

    for (let value of array) {
        if (Array.isArray(value) && depth > 0) {
            result.push(...flattenArray(value, depth - 1))
        } else {
            result.push(value)
        }
    }
    return result;
}

console.log(flattenArray([1, [2, [3]]], 2));
console.log(flattenArray([1, [2, [3, [4, [5]]]]], 4));
console.log(flattenArray([1, [2, [3, 4]]], 2));
console.log(flattenArray([1, ['a', ['b']], { x: 1 }], 2));