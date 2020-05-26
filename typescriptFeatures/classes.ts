// all methods are public by default, can be called anywhere anytime
// private would mean the method can only be called by other methods in the same class
// protected would mean the method can be called by the same class or by methods in child classes
class Vehicle {
  // when defining a property, initialize it too or define it in a constructor
  // color: string;

  // runs every time a new instance of the class is used
  // constructor(color: string) {
  //   this.color = color;
  // }

  // shorter way to write all the above code
  constructor(public color: string) {}

  // public drive(): void {
  //   console.log('chugga chugga');
  // }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// basic inheritance
class Car extends Vehicle {
  // reason to use private is to restrict other devs to it's use
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car();
car.startDrivingProcess();
