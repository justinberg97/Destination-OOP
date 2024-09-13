const Plane = require('../../classes/Plane');
const Person = require('../../classes/Person');

describe('Plane Class' , () => {
    test('company, origin, and destination should be assigned correclty' , () => {
        const plane = new Plane('Zplane', 'Dallas', 'Frisco');
        expect(plane.company).toBe('Zplane');
        expect(plane.origin).toBe('Dallas');
        expect(plane.destination).toBe('Frisco');
    })
    test('passengers should initialize as an empty array' , () => { 
        const plane = new Plane('Yplane', 'LAX', 'NYC');
        expect(plane.getPassengers()).toEqual([]);
    })
    test('can add Person to the passengers array using addPassenger' , () => {
        const plane = new Plane('Tplane', 'Cali', 'New Jersy');
        const person = new Person('Justin', 'Dallas');
        plane.addPassenger(person);
        expect(plane.getPassengers()).toContain(person);
    });
})