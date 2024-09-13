const Bag = require('../../classes/Bag');
const Person = require('../../classes/Person')

describe("Bag Class", () => {
  test("should create a new bag instance", () => {
    const bag = new Bag(20, "B123");
    expect(bag).toBeInstanceOf(Bag);
  });
  test("should assign weight and id correctly", () => {
    const bag = new Bag(12, "B134");
    expect(bag.weight).toBe(12);
    expect(bag.id).toBe("B134");
  });
  test("should initialize a null owner of the bag", () => {
    const bag = new Bag(13, "B111");
    expect(bag.getOwner()).toBeNull();
  });
  test("should assign a Person as owner using assignOwner()", () => {
    const person = new Person('Justin', 'Dallas');
    const bag = new Bag(11, 'B123')
    bag.assignOwner(person);
    expect(bag.getOwner()).toBe(person);
  });
});
