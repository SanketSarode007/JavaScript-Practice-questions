//! Arithmetic operators
//* + => used for addition and concatination, left to right evaluation of operation
console.log( 1 + 2 + '3'); //'33'
console.log('1' + 1 + 2); //'112'
console.log(1 + '2' + 3); //'123'
console.log(1 + 2 + 3 + true); //7 , boolean converted to int and added.
console.log(1 + '2' + 3 + true); //'123true' , boolean converted to string and concatinated

//* - => used for substraction
console.log(1 + 2 - '3'); //0 , '3' is converted to int for substraction
console.log('1' - 2 + 3); //2 , '1' is converted to int for substraction

// * => used for multiplication
console.log(2 * '2');//4 , '2' is converted to int for multiplication 
console.log(2 * '2' + 1);//5 , '2' is converted to int for multiplication 
console.log(2 * '2' + '3' + 1);//'431' , 4 -> 4 + '3' -> '43' -> '43' + 1 -> '431'
console.log(2 * '2' - '3' + 1);//2 , 2 * '2' ->  4 -> 4 - '3' -> 1 -> 1 + 1 -> 2

//*  / => used for division
console.log(2 / '2'); //1, '2' is converted to int for division
console.log(2 / '2' + false + true); //2, 2 / '2' -> 1 -> 1 + 0 + 1 -> 2

//* %  => used for modulo
console.log(1 + 3 % '2'); //2, '2' is converted to int for modulo

//? key learning -> if encountered string in arithmetic operation '+' changes operation 
//? to concatination which converts final result to string and '-' , '*'
//? '/' , '%' changes string to number makes final result int.

//! Logical Operator

/*
   @ list of truthy values in JavaScript
   @ 1. Non-empty strings -> "Hello" , " " etc.
   @ 2. Positive and negative numbers except 0 and NaN
   @ 3. Non-null Objects -> console.log(Boolean({})) //true -> empty object
   @ 4. Functions -> console.log(functions({})) //true
   @ 5. Special values -> console.log(Infinity) or console.log(-Infinity) //true
   @ 6. Boolean true 

   @ list of falsy values in JavaScript
   @ 1. false
   @ 2. 0 (zero)
   @ 3. -0 (negative zero)
   @ 4. "" empty string
   @ 5. null
   @ 6. undefined
   @ 7. NaN (not-a-number)
*/

//* (OR) || => returns first truthy value it encounter and ignore the second one, if not returns second one.
console.log(3 || 2); //3, if both are numbers then most left number will be result.
console.log('3' || 2);//'3', first one is truthy value .
console.log("" || 'Krishna'); //empty string is falsy value so we second one.

//* (And) && => return last value if all are truthy values or return first falsy value;
true && console.log("Hello"); // "Hello" console statement is always executed whether it is truthy or not
false && console.log("Hello"); // "Hello" console statement is always executed whether it is truthy or not

//* (Not) ! => return inverted boolean value
console.log(!false);// true
console.log(!false && "");// "" -> "" is falsy value so it stops here and print it.
console.log(![]);// false -> [] empty array or object is truthy value

//* (XOR) ^ operator if bits are different return 1 otherwise 0, works only if its precedence
//* is lower than && but higher than ||.
console.log(5 ^ 3);//6 , binary of 110 is 6
console.log(3 && '3' || null || 6 ^ 2);// '3' , ^ is ignored because it has lower precedence than ||
console.log(0 && '3' || null || 6 ^ 2);// 4 , 

//* ?? => Nullish Coalescing operator
//* it returns right-hand operator only if the left-hand operand is null or undefined.
console.log(null ?? "default");//"default"
console.log(null ?? undefined);// undefined, it checks till the end if still found null or undefined returns it.
console.log("" ?? "check");//"", if found left-hand operand other than null or undefined than returns it.

//! Comparison operator
//* < > <= >=
console.log(5 < 6 < 4); //true, 5 < 6 -> true -> 1 < 4 -> true, type coercion takes place
console.log('5' < 6 < null);//false, '5' < 6 -> 5 < 6 -> true -> 1 < null -> 1 < 0 -> false

//* == -> compares only value, not type
console.log(null == undefined);//true
console.log([] == ![]);//true, [] -> true -> ![] -> false -> 0 -> [] == 0 -> "" == 0 -> 0 == 0
//? The rule for == says: "If one operand is boolean, convert it to a number"
//? JavaScript doesn't directly convert objects to number, it first convert it to string than to number.
//? As above case [] is converted to "" than to boolean than to number.
console.log({} == []);//false, objects and arrays are different references therfore not equal
//? No type conversion happens in above case, because in case of == type coersion happens
//? only when one operand is primitive and another is non-primitive.
//? But comparing {} (plain objects) to primitive will always return false, because {} doesn't convert meaningfully.
//* == -> compares both value and type, if either is false returns false.
console.log(2 === 3);//false, value and type both are not equal
console.log('3' === 3);//false, value are equal but type are different.
console.log(null === undefined);//false, object type is being compared with undefined
console.log('3' === "3");//true

//! Assignment operators
//* Compound Assignment: += , -=, *=, /=, %=, **=
//* Bitwise Assignment: &=, `, ^=, <<=, >>=, >>>=
//* Logical Assignment: &&=, ??=

//! String operators
//* + => string concatenation
//* += => short-hand string concatenation
//* ` ` => template literals

//! Unary operators
//* + (unary plus) it converts operand into a number
console.log(+"5");//5, String to number
console.log(+true);//1, boolean to number
console.log(+false);//0, boolean to number
console.log(+null);//5, null to number
console.log(+undefined);//NaN
console.log(+[]);//0, empty array to number
console.log(+{});//NaN

//* - (negation plus) it converts operand into a number and negates it.
console.log(-"5");//-5, String to number and negates it.
console.log(-true);//-1, boolean to number and negates it.
console.log(-false);//-0, boolean to number and negates it.
console.log(-null);//-0, null to number and negates it.
console.log(-undefined);//NaN 
console.log(-[]);//0, empty array to number and negates it.
console.log(-{});//NaN 

//* !! (Double Not) it converts value to boolean(same as Boolean(value))
console.log(!!1);//true,
console.log(!!0);//false,
console.log(!!"Hello");//true,
console.log(!!"");//false,
console.log(!!null);//false,
console.log(!!undefined);//false

//* typeof operator, it returns data type of a variable
console.log(typeof null);//"object"
console.log(typeof true);//"boolean"
console.log(typeof function(){});//"function"

//* delete operator, delete an object property
//* void operator, it return undefined regardless of the operand
console.log(void 0);
console.log(void "Hello");
console.log(void (5 + 5));

//* Ternary (conditional) operator, shortcut for if-else statement
//* condition ? value_if_true : value_if_false
console.log(2 > 3 ? "Yes" : "No");//"No"

//* Nested Ternary (conditional) operator, for multiple conditions
console.log(
   (85 >= 90) ? "A" :
   (85 >= 80) ? "B" :
   (85 >= 70) ? "C" : "F"
);//"B"

//!Type Operators
//* typeof
//* instansof
//* variable.constructor, return constructor function
//* Ojbect.prototype.toString.call(value) (Reliable type checking)
//* isNaN(), check if value is a NaN.

//!
//?
//*
//~
//@