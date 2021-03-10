// ### Extend three classes (car/animal/person) ###

// ### Define class Car ###

class Car {
  brandName;
  modelName;
  transmission;
  doors;

  constructor(brandName, modelName, transmission, doors) {
    this.brandName = brandName;
    this.modelName = modelName;
    this.transmission = transmission;
    this.doors = doors;
  }

  carName() {
    return this.brandName + " " + this.modelName;
  }
}

// ### Extend class Car ###

class Motorbike extends Car {
  wheels;

  constructor(brandName, modelName, transmission, doors, wheels) {
    super(brandName, modelName, transmission, doors);
    this.wheels = wheels;
  }
  vehicleName() {
    return (
      this.brandName + " " + this.modelName + " has " + this.wheels + " wheels."
    );
  }
}

// ### Define class Animal ###

class Animal {
  aniName;
  aniPopul;
  aniSize;
  aniColor;

  constructor(aniName, aniPopul, aniSize, aniColor) {
    this.aniName = aniName;
    this.aniPopul = aniPopul;
    this.aniSize = aniSize;
    this.aniColor = aniColor;
  }

  aniDescri() {
    return "There are " + this.aniPopul + " " + this.aniName + "s.";
  }
}

// ### Extend class Animal ###

class Fish extends Animal {
  typeWater;

  constructor(aniName, aniPopul, aniSize, aniColor, typeWater) {
    super(aniName, aniPopul, aniSize, aniColor);
    this.typeWater = typeWater;
  }

  waterInhabit() {
    return this.aniName + " inhabits " + this.typeWater + " water.";
  }
}

// ### Define class Person ###

class Person {
  firstName;
  lastName;
  persAge;
  profession;

  constructor(firstName, lastName, persAge, profession) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.persAge = persAge;
    this.profession = profession;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

// ### Extend class Person ###

class FyStatus extends Person {
  status;

  constructor(firstName, lastName, persAge, profession, status) {
    super(firstName, lastName, persAge, profession);
    this.status = status;
  }

  fyStatus() {
    return this.firstName + " " + this.lastName + " is " + this.status + ".";
  }
}

// ### Create three objects of subclass Motorbike ###

var car1 = new Motorbike("Kawasaki", "Ninja", "manual", 0, 2);
var car2 = new Motorbike("Vespa", "Sprint 50", "manual", 0, 2);
var car3 = new Motorbike("BMW", "C1", "automatic", 0, 2);

// ### Create three objects of subclass Fish ###

var animal1 = new Fish("Shark", 90000, "middle", "white", "salt");
var animal2 = new Fish("Goldfish", 37479879379, "small", "red", "fresh");
var animal3 = new Fish("Bluefish", 78795875, "small", "blue", "salt");

// ### Create three objects of subclass FyStatus ###

var person1 = new FyStatus("Jennifer", "Lawrence", 31, "actress", "married");
var person2 = new FyStatus("Kevin", "James", 56, "comedian", "married");
var person3 = new FyStatus("Sandra", "Bullock", 57, "actress", "not married");

// ### Output to browser ###

document.getElementById("car1").innerHTML = car1.vehicleName();
document.getElementById("car2").innerHTML = car2.vehicleName();
document.getElementById("car3").innerHTML = car3.vehicleName();

document.getElementById("animal1").innerHTML = animal1.waterInhabit();
document.getElementById("animal2").innerHTML = animal2.waterInhabit();
document.getElementById("animal3").innerHTML = animal3.waterInhabit();

document.getElementById("person1").innerHTML = person1.fyStatus();
document.getElementById("person2").innerHTML = person2.fyStatus();
document.getElementById("person3").innerHTML = person3.fyStatus();
