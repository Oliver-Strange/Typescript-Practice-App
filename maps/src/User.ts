import faker from 'faker';
import { Mappable } from './CustomMap';

// to help with error location, you can export/import an interface
// and have the class implement it, if the interface changes the class
// will error out as well as any time the class with the interface is called

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
