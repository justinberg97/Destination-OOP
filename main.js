const Bag = require('./classes/Bag');
const Person = require('./classes/Person');
const Airport = require('./classes/Airport');
const Plane = require('./classes/Plane');


function main() {
 const person1 = new Person('Justin', 'Dallas');
 //create a bag and assign it to the person
 const bag1 = new Bag(15, 'B123');
 person1.addBag(bag1);
 bag1.assignOwner(person1);
 //create plane and add the person as a passenger
const plane1 = new Plane('Air Dallas', 'JFK', 'CDG');
plane1.addPassenger(person1);
//create an airport and add the plane to the airport
const airport1 = new Airport('Charles de Gaule', 'CDG');
airport1.addPlane(plane1);


console.log(person1.getBags());
console.log(plane1.getPassengers());
console.log(airport1.getPlanes());

}


main();