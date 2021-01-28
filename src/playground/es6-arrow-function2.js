//argumaents object no longer bound

const add = (a, b) => {
  //   console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

//This keyword no longer bound

const user = {
  name: "Dug",
  cities: ["Seville", "London", "Barna"],
  printPlacesLived() {
    return this.cities.map((city) => this.name + " has lived in " + city);
    return cityMessages;
  },
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [2, 4, 6, 8],
  multiplyBy: 7,
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number);
  },
};

console.log(multiplier.multiply());
