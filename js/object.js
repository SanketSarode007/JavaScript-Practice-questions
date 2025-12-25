//* Everything in JavaScript tries to be an object

//* In below line, we are tring to access length property like a key
//* on primitive data type string. So, JS internally convert the 
//* 's' into object of string -> new String('s').length -> 1
//* this concept is called as "boxing".
//* Everything in js is not an object, but we can say 
//* Everything in JavaScript tries to be an object
console.log('s'.length); // 1  

//* In JS, an object is always created from an function.
//* Every Object in JS is comes from a Function;
//* Base Function of every object is Object Function.
//* Whenever you create an object, internally JS will invoke a new Object.

   