function deepClone(value) {
    if (value == null || typeof value !== 'object') {
        return value
    }

    if (Array.isArray(value)) {
        return value.map((item) => deepClone(item))
    }

    if(value instanceof Date){
        return new Date(value.getTime())
    }

    let result;

    if (Array.isArray(value)) {
        result = []

        result.forEach((item) => {
            if (Object.prototype.hasOwnProperty.call(item, index)) {
                result[index] = deepClone(item[index])
            }
        })

    } else if (typeof value === 'object') {
        result = {}

        for (const key in value) {
            if (Object.prototype.hasOwnProperty.call(value, key)) {
                result[key] = deepClone(value[key])
            }
        }
    }

    return result
}

const obj = {
    a: 1,
    b: { c: 2 }
};

const date = {
  today: new Date()
};

const arr = [1, 2, 3, [4, 5]];
const clone = deepClone(date);
console.log(clone);

// clone[3][0] = 2
// console.log('Original',arr);
// console.log('Cloned', clone);

// clone.b.c = 99;
// console.log(obj.b.c);   // 2
// console.log(clone.b.c); // 99

console.log(clone.today instanceof Date); // true
console.log(clone.today !== date.today);   // true
console.log(clone.today.getTime() === date.today.getTime()); // true