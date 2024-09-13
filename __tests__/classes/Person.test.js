const Person = require('../classes/Person');
const Bag = require('../classes/Bag');

describe('Person Class', () => {
    test('should create an instance of a person', () => {
        const person = new Person('Jim', 'Paris');
        expect(person).toBeInstanceOf(Person);
    });
    test('should assign name and destination correctly' , () => {
        const person = new Person('Justin', 'Dallas');
        expect(person.name).toBe('Justin');
        expect(person.destination).toBe('Dallas');
    });
    test('bag should initialize as an empty array' , () => {
        const person = new Person('Salma', 'Spain');
        expect(person.getBags()).toEqual([]);
    })
    test('addBag should add a bag to the Person correctly' , () => {
        const person = new Person('Jason', 'Detroit');
        const bag = new Bag(13, 'B333');
        person.addBag(bag);
        expect(person.addBag()).toContain(bag);
    });
})