/* Data types 
    - number, string, boolean, undefined, null, object, array, symbol
*/

// variables 
// case sensitive
var name = "John";
let age = 30;
const isMarried = true;
var a;
a = 10;
a = "John";
var sum = a + age;
var difference = a - age;
var product = a * age;
var quotient = a / age;
var remainder = a % age;
var increment = a++;
var decrement = a--;
a += 12;
a *= 12;
a /= 12;
var strVar = "first sentence"
strVar += " second sentence"

// Escaping characters
var myString = "I am a \"double quoted string\" inside a \"double quote\" string";
myString = 'I am a "single quoted string" inside a "single quote" string';
myString = `I am a "template literal" inside a "template literal" string`;

// CODE OUTPUTS
// \n - new line
// \t - tab
// \r - carriage return
// \b - backspace
// \f - form feed
// \\ - backslash
// \' - single quote
// \" - double quote
// \$ - dollar sign

// Concatenation
var FullName = "John" + " " + "Doe";
console.log(FullName.length);
console.log(FullName[0]);
console.log(FullName[FullName.length - 1]);
// strings are immutable
FullName[0] = "d";
console.log(FullName);

var myArr = [1,3, "John", true];
myArr.push("Doe");
myArr.pop();
myArr.unshift("Doe");
myArr.shift();
myArr[2] = "Jane"; // replaces the value at index 2 with Jane
var nestedArray = [["name","juma"], ["age", 30]];
nestedArray[0][0];
