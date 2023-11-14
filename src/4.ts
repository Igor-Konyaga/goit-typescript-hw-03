class Key {
  constructor(public signature: number) {
    this.signature = signature;
  }

  getSignature(): Number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  door: boolean;
  key: Key;
  tenants: Person[];

  constructor(key: Key) {
    this.key = key;
    this.door = false;
    this.tenants = [];
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    } else {
      console.log("The door is closed");
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is opened");
    } else {
      console.log("The key does not match. The door remains closed");
    }
  }
}

const key = new Key(Math.random());

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
