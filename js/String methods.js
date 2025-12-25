
let string = "Hello World"; 

//* charAt(index) -> returns an character at index.
console.log(string.charAt(1));//'e'

//* charCodeAt(index) -> Returns the Unicode value (character code) of the character at a specified index.
console.log(string.charCodeAt(1)); //101 unicode value of 'e'

//* concat(str2, str3, ..) -> returns Combines multiple strings into one string.
console.log(string.concat(" Welcome ", "to ", "coding"));

//* includes(searchString, position) -> Checks if a substring exists within the string, returning true or false.
console.log(string.includes("World"))//true

//* indexOf(searchValue, fromIndex) -> Returns the index of the first occurrence of a substring, or -1 if not found.
console.log(string.indexOf("World"))// 6
console.log(string.indexOf("World", 7)) //-1, because from index 7 World does not occur.

//* lastIndexOf(searchValue, fromIndex) -> Returns the index of the last occurrence of a substring, or -1 if not found
console.log(string.lastIndexOf("l"))//9

//*  repeat(count) -> Returns a new string that repeats the original string a specified number of times.
console.log(string.repeat(3))//Hello WorldHello WorldHello World

//* replace(searchValue, newValue) -> Replaces the first occurrence of a substring with a new substring.
console.log(string.replace("World","there"))//Hello there

//* replaceAll(searchValue, newValue) -> Replaces all occurrences of a substring with a new substring (introduced in ES2021).
let str = "Hello World World"
console.log(str.replaceAll("World","there"))//Hello there there

//* search(regexp) -> Searches for a match using a regular expression, returning the index of the match, or -1 if not found
console.log(str.search("World"));//6

//* slice(beginIndex, endIndex) -> Extracts a part of the string and returns a new string.
console.log(string.slice(0, 5)); //Hello

//* split(separator, limit) -> Splits a string into an array of substrings based on a specified separator.
console.log(string.split(' '));//['Hello','World']

//* startsWith(searchString, position) -> Checks if the string starts with the specified substring.
console.log(string.startsWith("Hello"));//true

//* endsWith(searchString, length) -> Checks if the string ends with the specified substring.
console.log(string.endsWith("World"));//true

//* toLowerCase() -> Converts the string to lowercase.
console.log(string.toLowerCase()); //hello world

//* toUpperCase() -> Converts the string to uppercase.
console.log(string.toUpperCase())//HELLO WORLD

//* trim() -> Removes whitespace from both ends of the string.
//* trimStart() and trimEnd()
console.log(string.trim()); //Hello world

//* valueOf() -> Returns the primitive value of the string object (usually the same as the string itself).
console.log(string.valueOf())//Hello World

