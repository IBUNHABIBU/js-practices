// constructor function creation
var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}

var zeus = new SpaceShuttle("Jupiter")
console.log(zeus.targetPlanet)

// using class 
class Car {
    constructor(name) {
        this.name = name;
    }
}
let saloon = new Car("benz")
console.log(saloon.name)

class Book {
    constructor(author) {
        this._author = author;
    }

    // getter
    get writter() {
        return this._author;
    }

    // setter
    set writter(updateAuthor){
        this._author = updateAuthor;
    }
}

function makeClass(){
    class Thermostat{
        constructor(temp){
            this._temp = 5/9 * (temp-32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(temp){
            this._temp = temp;
        }
    }

    return Thermostat;
}

let Thermostat = makeClass();
let thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp)

// import and export module