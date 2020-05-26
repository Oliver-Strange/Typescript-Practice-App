const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// this annotation makes an array into a tuple, preserving the order of data types
// const pepsi: [string, boolean, number] = ['brown', true, 40]

// creating a type alias instead of annotating every tuple with the tuple array
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// tuples are not super useful, they don't fully describe the data
const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354,
};
