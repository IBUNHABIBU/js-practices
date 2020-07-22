// spread operator
let abacus = ["one","two","thre"];
let extended = ["four","five"];
let combined = ["science","math",...abacus,"Geo",...extended];
console.log(combined);

function addThreeNumbers(x,y,z){
    console.log(x+y+z);
}
var arg = [1,2,3,5]; // it gonna discard the last element
addThreeNumbers(...arg);

// copy using spread operator 
let arr1 = [...arg]; // it does not affect the original array
// array concatenation 
let concArray = [...arr1,...arg];
console.log("conc array",concArray);
// rest operator 
function multiplication(multiplier, ...theArgs){
    return theArgs.map(ele=>{
        return ele * multiplier;
    })
}
var theResult = multiplication(2,5,6,8);
console.log(theResult);
const alphabet = ['A','B','C','D','E','F'];
const numbers = ['1','2','3','4','5','6'];
// array distructuring 
const [a,b] = alphabet;
console.log(a);
console.log([a,b]);
let [x,,y,...rest] = numbers;
console.log(rest);
const newArray = [...alphabet, ...numbers];
console.log(newArray);

// sum and multiply
function sumAndMultiply(a,b){
    return [a+b,a*b,a/b];
}
console.log(sumAndMultiply(3,5));
//alternatively 
const [sum,multiply,divition = 'no division'] = sumAndMultiply(8,24);
console.log(sum);
console.log(multiply);
console.log(divition);

const personOne = {
    name: "Jamali",
    age: 24,
    address: {
        city: "Kivule",
        state: "Mkuranga"
    }
}

const personTwo = {
    name: "Mwatuka",
    age: 31,
    address: {
        city: "Kino",
        state: "Dar"
    }
}

// Object distructuring 
const {name, age, ...restop} = personOne;
console.log({name,age});

const {name: firstName, address, favoriteFood = 'Rice'} = personTwo;
console.log(firstName);
console.log(favoriteFood);
console.log(restop);


const personPrime = {
    address: {
        city: "Kino",
        state: "Dar"
    }
}
const personStar = {
    name:"Alice",
    age: 48
}

const personThree = {...personPrime, ...personStar}
console.log(personThree);

// passing object to function 
function printUser(user){
    console.log(`Name is : ${user.name} and the age is : ${user.age}`);
}
printUser(personTwo);
// using object distructuring
function printUser({name,age,favoriteFood = 'Badia'}){
    console.log(`Name is : ${name} and the age is : ${age} and food is:${favoriteFood}`);
}
printUser(personThree);

// array rules 
// dont use -index , index that is greater than the last array , string as index 
arr = [3,5,6,31,8]
let otherArray = new Array(5);
let anotherArray = new Array("moja","mbile",3);
anotherArray[3]= 7;
anotherArray.reverse();
anotherArray.sort();
// inserting element at the end of array 
arr.push("kame",81,"elimu");
console.log(arr);
// inserting element at the beginning of the array
arr.unshift("first","element");
console.log(arr);
// set array length 
arr.length = 6;
console.log(arr);
// find the index of element in array
console.log(arr.indexOf("element"));
var myObj = {a:1},
    otherObj = {b:4};
let ind = [myObj,otherObj].indexOf(myObj);
console.log(ind);
let indian = [1,2,3,4,5,2,3,2,1].indexOf(3,4);
console.log(indian);
// slicing the first two element 
console.log(arr.slice(2)); // and it never change the original array
console.log(arr.slice(2,4)); // slicing from indx 2 to indx 4 
// splice it changes the original array 
console.log(arr.splice(2));
console.log(arr);
// remove three consecutive array using splice 
console.log(alphabet.splice(2,3));
// inserting element using splice 
console.log(numbers.splice(2,3,"john","Doe","miami","elija","Pussy"));
console.log(numbers);
// dont use delete key word if you want to delete an array
numbers.splice(2,3,4,65,14,8,9);

// higher order array  function 
numbers.forEach(function(element, index, array){
    console.log(index,element);
});
let result = numbers.map(function(el,index,array){
    return el * el * index;
});
console.log(result);
 result = numbers.filter(function(el,index,array){
    return el > 8;
});
console.log(result);
result = numbers.some(function(el,index,array){
    return el < 0;
});
console.log(result);
 result = numbers.every(function(el,index,array){
    return el> 1;
});
console.log("every",result);
let test = [4,5,3,8,10]
 result = test.reduce(function(sum,el,index,array){
    return sum+el;
},0);
console.log(result);
arrayLen = ["juma", , , , , , "4it",""];
result = arrayLen.reduce(function(len,el){
    return len+1;
},0);
console.log("the length of array is : ",result);
bl = ["new","happy",true,"joe"];
console.log(bl.filter(Boolean));
console.log(Array.isArray(bl));













