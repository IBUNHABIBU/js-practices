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
FullName.length;
FullName[0];
FullName[FullName.length - 1];
// strings are immutable
FullName[0] = "d";
FullName;

var myArr = [1,3, "John", true];
myArr.push("Doe");
myArr.push(["Jane", "Domino"]);
myArr.push("fue", 4)
myArr.pop();
myArr.unshift("Doe");
myArr.shift();
myArr[2] = "Jane"; // replaces the value at index 2 with Jane
var nestedArray = [["name","juma"], ["age", 30]];
nestedArray[0][0];

// Function
var myGlobal = 10;
function func1() {
    oopsGlobal = 5;
}

function func2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
func1()
func2();

var outwear = "T-shirt"
function wearTShirt() {
    var outwear = "sweater"; // local variable is preferered over global variable
    return outwear;
}
wearTShirt()

function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
} // end of caseInSwitch
caseInSwitch(1);