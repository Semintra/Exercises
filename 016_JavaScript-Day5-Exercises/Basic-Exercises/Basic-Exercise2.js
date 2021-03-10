/////////////////////////////////

// ### Define a class Car ###

class Car {
  brandName;
  model;
  transmission;
  doors;
  // ### constructor ###
  constructor(bName, mdl) {
    this.brandName = bName;
    this.model = mdl;
  }
  // ### Method within the class ###
  carname() {
    return this.brandName + " " + this.model;
  }
}

// ### Define a class Animal

class Animal {
  name;
  speed;
  population;
  continent;
  // ### constructor ###
  constructor(nme, pop) {
    this.name = nme;
    this.population = pop;
  }
  // ### Method within the class ###
  animalfunc() {
    return this.name + ", population: " + this.population;
  }
}

// ### Define a class Person ###

class Person {
  firstName;
  lastName;
  age;
  profession;
  // ### constructor ###
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }
  // ### Method within the class ###
  fullname() {
    return this.firstName + " " + this.lastName;
  }
}

var car1 = new Car("Ford", "F150", "automatic", 4);
var car2 = new Car("Mercedes", "C180", "manual", 4);
var car3 = new Car("VW", "Passat");
