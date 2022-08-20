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

//Objects
var john = {
    firstName: "John",
    lastName: "Doe",
    birthYear: 1990,
    family: ["Jane", "Mark", "Bob", "Emily"],
    location: {
        city: "New York",
        temp: 29
    }
}
john.firstName;
john.family[2];
john.location.city;

var ourDog = {
    "name": "Camper",
    "id number": "2",
}
console.log("Dogs name", ourDog.name);
ourDog["name"];
var badge = "id number"
console.log("Dogs id number", ourDog[badge]);

delete ourDog.name;
console.log(ourDog);

function phoneticLookup(val) {
    var result = "";
    // insead of switch statement
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
    result = lookup[val];
    return result;
}
phoneticLookup("charlie");

function checkObj(checkProperty) {
    if (john.hasOwnProperty(checkProperty)) {
        return john[checkProperty];
    } else {
        return "Not Found";
    }
}
console.log(checkObj("firstName"));

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano man",
    }, 
    {
        "artist": "Harmorapa",
        "title": "Mr Kiki",
        list: [1,5,4]
    }

]

var collection = {
    "2548": {
        "album": "slipery when wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it rock",
            "You give love a bad name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [
            "Stop"
        ]
    },
    "5439": {
        "album": "ABBA Gold",
        "artist": "ABBA",
        "tracks": [
            "Dancing with a Dork",
            "Take a Chance on Me"
        ]
    }
}

collection["2548"]["tracks"][1];
var collectionCopy = JSON.parse(JSON.stringify(collection));
function upadeRecord(id, prop, value) {
    if (value == "") {
        delete collection[id][prop];
    } else if (prop == "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}

upadeRecord(5439, "artist", "ABBA");
console.log('collection', collection);
upadeRecord(5439, "tracks", "Take a Chance on Me");
console.log('collection', collectionCopy);

// while loop
var i = 0;
var arrContainer = [];
while (i < 10) {
    arrContainer.push(i);
    i++;
}

var j = 10;
var doArr = [];
do {
    doArr.push(j)
    j++;
} while (j < 5);

console.log("Do while loop,", doArr);

// for loop
var myArrContainer = [];
for (var i = 0; i < 10; i++) {
    arrContainer.push(i);
}

var ourArr = [9,10,11,12]
var ourTotal = 0
for (var i = 0; i < ourArr.length; i ++) {
  ourTotal += ourArr[i];
}

console.log("Total", ourTotal);

function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName == name) {
            if(contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop] || "No such property";
            }
        }
    }
    return "No such contact";
}
console.log(lookUpProfile("Akira", "likes"));

function randomizer(arr) {
    var random = Math.floor(Math.random() * arr.length);
    return arr[random];
}
console.log(randomizer(["John", "Jill", "Harry"]));
var randBtn1and19 = Math.floor(Math.random() * 20);
function ourRandomRange (ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

function convertToInteger(str, base = 10) {
    return parseInt(str, base)
}

console.log(convertToInteger("4"))
console.log(convertToInteger("1100100", 2))
console.log(convertToInteger("1100100"))

// tenary operator 

function checkValues(a,b) {
    return a === b ? "They match" : b < 0 ? "Things deffer" : "they are big enough"
}

// ES6 

let catName = "Quincy"
let quote;

//  you can not use let twice with the same variable
// it is scopped
// let catName = "Pusi"
catName = "Pusi"

// const is a read only var you can not reassign
const GENDER = "male"
function catTalk() {
    'use-strict';
    catName = "Oliver"

    quote = catName + " Myeow !" + "he is a " + GENDER
    return quote;
}

console.log(catTalk());

// mutate the array with const
const s = [5,2,4]
function editInPlace() {
    "use-strict";
    s[0] = 10;
    s[1] = 20;
    s[2] = 30;
    return s;
}
console.log(editInPlace());

// object freeze to prevent mutation
const freezeObject = () => {
    "use-strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try{
        MATH_CONSTANTS.PI = 9.97
    } catch(ex) {
        console.log(ex)
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObject();
console.log(PI);

// higher order function
const sum = (function() {
    return function sum(...args) {
        const args = [x,y,z]
        return args.reduce((a,b) => a + b, 0)
    }
})()

console.log(sum(1,2,3))