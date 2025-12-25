//* concat() -> Combines two or more arrays and returns a new array.
let a1 = [1, 2];
let a2 = [3, 4];
let result = a1.concat(a2);
console.log(result);  // [1, 2, 3, 4]

//* copyWithin(target, start, end) -> Copies a portion of an array to another location in the same array.
let a = [1, 2, 3, 4, 5];
console.log(a.copyWithin(0, 3, 5));  // [4, 5, 3, 4, 5]

//* fill(value, start, end) -> Fills all elements in an array from a start index to an end index with a specified value.
let a3 = [1, 2, 3, 4];
console.log(a3.fill(0, 1, 3));  // [1, 0, 0, 4]

//* filter(callback) -> Creates a new array with all elements that pass the test implemented by the provided function.
let a4 = [1, 2, 3, 4, 5];
let result1 = a4.filter(x => x % 2 === 0);
console.log(result1);  // [2, 4]

//* find(callback) -> Returns the first element in the array that satisfies the provided testing function.
let a5 = [5, 10, 15, 20];
let result2 = a5.find(x => x > 10);
console.log(result2);  // 15

//* findIndex(callback) -> Returns the index of the first element in the array that satisfies the provided testing function.
let a6 = [5, 10, 15, 20];
let result3 = a6.findIndex(x => x > 10);
console.log(result3);  // 2

//* forEach(callback) -> Executes a provided function once for each array element.
let a7 = [1, 2, 3];
a7.forEach(x => console.log(x));  // 1, 2, 3

//* includes(value) -> Checks if the array contains a certain element.
let a8 = [1, 2, 3];
console.log(a8.includes(2));  // true

//* indexOf(value, fromIndex) -> Returns the index of the first occurrence of a specified value, or -1 if not found.
let a9 = [1, 2, 3];
console.log(a9.indexOf(2));  // 1

//* join(separator) -> Joins all elements of the array into a string, separated by the specified separator.
let a10 = [1, 2, 3];
console.log(a10.join('-'));  // "1-2-3"

//* map(callback) -> Creates a new array populated with the results of calling a provided function on every element in the calling array.
let a11 = [1, 2, 3];
let result4 = a11.map(x => x * 2);
console.log(result4);  // [2, 4, 6]

//* pop() -> Removes the last element from the array and returns that element.
let a12 = [1, 2, 3];
let poppedValue = a12.pop();
console.log(poppedValue);  // 3
console.log(a12);  // [1, 2]

//* push(value1, value2, ..., valueN) -> Adds one or more elements to the end of the array and returns the new array length.
let a13 = [1, 2];
let newLength = a13.push(3, 4);
console.log(newLength);  // 4
console.log(a13);  // [1, 2, 3, 4]

//* reduce(callback, initialValue) -> Applies a function against an accumulator and each element in the array to reduce it to a single value.
let a14 = [1, 2, 3];
let sum = a14.reduce((acc, curr) => acc + curr, 0);
console.log(sum);  // 6

//* shift() -> Removes the first element from the array and returns that element.
let a15 = [1, 2, 3];
let shiftedValue = a15.shift();
console.log(shiftedValue);  // 1
console.log(a15);  // [2, 3]

//* slice(begin, end) -> Returns a shallow copy of a portion of the array.
let a16 = [1, 2, 3, 4];
let slicedArr = a16.slice(1, 3);
console.log(slicedArr);  // [2, 3]

//* splice(start, deleteCount, item1, item2, ...) -> Changes the contents of an array by removing or replacing elements.
let a17 = [1, 2, 3, 4];
a17.splice(2, 1, "a", "b");
console.log(a17);  // [1, 2, "a", "b", 4]

//* unshift(value1, value2, ..., valueN) -> Adds one or more elements to the beginning of the array and returns the new array length.
let a18 = [2, 3];
let newLength2 = a18.unshift(1);
console.log(newLength2);  // 3
console.log(a18);  // [1, 2, 3]

//* flat(depth) -> Flattens nested arrays up to a specified depth.
let arr = [1, [2, 3], [4, [5, 6]]];
console.log(arr.flat(2));  // [1, 2, 3, 4, 5, 6]

