var user = {
    name: "Ninjas",
    email: "ibnhuhabew@gmail.com",
    age: 48,
    login(){
        console.log(this.email,"is online")
    }
}
console.log(user.name);
console.log(user.login());
// changing the name property
user.name = "Mwanahamisi";
user['email'] = "janafatv@gmail.com";
console.log(user['email']);
var prop = 'name';
console.log(user[prop]);
// set new property
user.weight = 71;
user.logInfo = function(){
    console.log("this is the infor made by : ",this.name);
}
console.log(user.logInfo());

class Person {
    constructor(name,email){
        this.name = name;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(this.email," this is my email");
        return this; // return the object for method chaining
    }
    logout(){
        console.log(this.name,"has logout ");
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.name,"score is now : ",this.score);
        return this;
    }
}
const persont = new Person("juma","simple2@gmail.com");
const isha = new Person("Aisha","ishajojo@gmail.com");
console.log(persont.name);
persont.login();
// method chaining 
persont.logout().login().updateScore().updateScore().logout();

// inheritance 
class Admin extends Person{
    deleteUser(user){
        users = users.filter(u=>{
            return u.email != user.email;
        })
    }
}
var admin = new Admin("Kamala","elia@gmail.com");
var users = [persont,isha,admin];
admin.deleteUser(isha);
console.log(users);

// constructor function 
function Uzer(mail,nome,dob){
    this.mail = mail;
    this.nome = nome; 
    this.dob = new Date(dob);
    this.online = false;
    this.loggedIn = function(){
        console.log(this.nome, "Has loged in");
    } 
}
var userOne = new Uzer("jakaranda@gmail.com","Makala",14-06-2001);
console.log(userOne.dob);
console.log(userOne.dob.getDay());
console.log(userOne.dob.getUTCFullYear());
userOne.loggedIn();

///  only the constructor function is having the prototype
function Car(color,speed){
    this.color = color;
    this.speed = speed;
    this.registered = false;
}
Car.prototype.loadCargo = function(){
    this.registered = true;
    console.log("My ",this.color,"vehicle has loaded the cargo with a speed of:",this.speed,"Km/h");
}
var myCar = new Car("Green",80);
myCar.loadCargo();

function Tractor(...args){
    Car.apply(this,args);
    this.role = "digging the farm";
}
// prototype inheritance 
Tractor.prototype = Object.create(Car.prototype);
var powerTiller = new Tractor('red',50);
console.log(powerTiller);
powerTiller.loadCargo();
Tractor.prototype.makeMoney = function(){
    console.log(this.speed+"Km/h gonna make money twice a day");
}
powerTiller.makeMoney();