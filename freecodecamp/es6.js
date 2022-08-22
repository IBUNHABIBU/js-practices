
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
var sum = (function() {
    return function sum(...args) {
        return args.reduce((a,b) => a + b, 0)
    }
})()

console.log(sum(1,2,3))

const arr1 = ["Jan", "Feb", "March"]
let arr2;
(function(){
    // spread out the content of arr1 to arr2
    arr2 = [...arr1];
    arr1[0] = "Monday"

})()

console.log(arr2)

// Object distructuring 
const voxel = {
    x: 7,
    y: 1.3,
    z: 15.0
}

// const { x:poso, y:kama, z:azil} = voxel 
// console.log(poso, kama, azil)
const { x, y, z } = voxel;
console.log(x, y, z);

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
}

function getTempOfTmrw(avgTemperatures) {
    "use-strict";
    const { tomorrow: tempOfTomorrow } = avgTemperatures;
    return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));

// distructuring nested object 
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
}

function getMaxOfTmrw(forecast) {
    "use-strict";
    const { tomorrow: { max: maxOfTomorrow } } = forecast;
    return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));

// destructuring array
const [a,b,c] = [1,2,3]
console.log(a,b,c)
const [d,e, ,k] = [1,2,3,4,5]
console.log(d,e, k)

const [f, ...g] = [1,2,3,4,5]
console.log(f,g)

// destructuring array with default values
const [h = 1, i = 2] = [undefined, undefined]
console.log(h,i)

let duje = 8, biko = 9;
((duje, biko) => {
    "use-strict";
    [duje, biko] = [biko, duje]
    })(duje, biko)
console.log(duje, biko)

// destructuring with rest operator
const [j, ...p] = [1,2,3,4,5]
console.log(j,p)

const source = [1,3,4,5,6,8]

const removeFirstTwo = (list) => {
    const [, , ...arr] = list;
    return arr;
}
console.log(removeFirstTwo(source))