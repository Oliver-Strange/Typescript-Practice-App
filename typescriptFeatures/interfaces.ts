// creating an interface is creating a new type to be reused
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

// oldCivic can have more properties than the interface, when passed as an argument
//    to an invoked function only the things in the interface will be checked
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// type annotations can get really long if the object is large, tedious to type every time it is needed
// (vehicle: {name: string; year: number; broken: boolean})
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(vehicle.summary());
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

// TS checks the argument to make sure it has the properties of Vehicle
printVehicle(oldCivic);

printSummary(oldCivic);
printSummary(drink);
