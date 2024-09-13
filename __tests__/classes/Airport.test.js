const Airport = require('../classes/Airport');
const Plane = require('../classes/Plane')

describe('Airport Class', () => {
    test('should create an Airport instance with correct data in array' , () => {
        const airport = new Airport('Justin International Airport');
        expect(airport.name).toBe('Justin International Airport');
        expect(airport.getPlanes()).toEqual([]);
    });
    test('airport code should be the correct value', () => {
        expect(Airport.airportCode).toBe('JIA');
    });
    test('should correctly add Plane to the planes array' , () => {
        const airport = new Airport('Justin International Airport');
        const plane = new Plane('TPlanes', 'Dallas', 'Denton');
        airport.addPlane(plane);
        expect(airport.getPlanes()).toContain(plane);
    });
})