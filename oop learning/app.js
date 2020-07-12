// Object literal
var person = {
    firstName : "Jumaa",
    lastName : "Khari",
    age: 34,
    children: ['Anna','Ariel','Kalamus'],
    address: {
        street: "Msasani",
        ward: "Kinondoni",
        city: "Darul salaam"
    },
    fullName : function(){
        return "My name is: "+this.firstName+"  "+this.lastName;
    }
}
console.log(person.age);
console.log(person.children);
console.log(person.children[1]);
console.log(person.address);
console.log(person.address.ward);
console.log(person.fullName());

// Object constractor 
var apple = new Object();
apple.color = 'red';
apple.shape = 'round';
apple.description = function(){
    return "An apple is the "+this.color+" "+this.shape+"ed fruit"
}
console.log(apple.color);
console.log(apple.description());

// Constructor pattern
function Fruit(name,color,shape){
    this.name = name;
    this.color = color;
    this.shape = shape;
    this.description = function(){
        return "An apple is the "+this.color+" "+this.shape+"ed fruit"
    }
}
const fruit = new Fruit('Apple','Red','Round');
console.log(fruit.name);
console.log(fruit.description());

// Arrays of objects 
var users = [
    { name: "John Doe", 
        age: 30
    },
    {
        name: "Fenando Torres",
        age : 19
    },
    {
        name: "Ali Musa",
        age : 21
    }
]
console.log(users);
console.log(users[1]);
console.log(users[1].name);