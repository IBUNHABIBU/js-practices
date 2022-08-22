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