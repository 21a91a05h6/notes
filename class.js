class Car{

}
let c=new Car();
let d=new Car();// when not defined it will go out of scope and checks for prototype made by the class, since d does not have x in d.x
//console.log(typeof c); // This will log 'object' since c is an instance of the Car class
c.x=10;
Car.prototype.x=20; // Adding a property to the Car prototype
console.log(c.x); // This will log 10 since c has its own property x
console.log(d.x); // This will log 20 since x is a property of the Car prototype(prototype inheritance)
