// ### Define three classes (car/animal/person) ###

// ### Define class Car ###

class Car {
  brandName;
  modelName;
  gearBox;
  doors;

  constructor(bName, mName, gBox, drs) {
    this.brandName = bName;
    this.modelName = mName;
    this.gearBox = gBox;
    this.doors = drs;
  }

  carName() {
    return this.brandName + " " + this.modelName;
  }
}

// ### Define class Animal ###

class Animal {
  aniName;
  aniPopul;
  aniSize;
  aniColor;

  constructor(aName, aPop, aSize, aColor) {
    this.aniName = aName;
    this.aniPopul = aPop;
    this.aniSize = aSize;
    this.aniColor = aColor;
  }

  aniDescri() {
    return "There are " + this.aniPopul + " " + this.aniName + "s.";
  }
}

// ### Define class Person ###

class Person {
  firstName;
  lastName;
  persAge;
  profession;

  constructor(fName, lName, age, prof) {
    this.firstName = fName;
    this.lastName = lName;
    this.persAge = age;
    this.profession = prof;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

// ### Create three objects of class Car ###

var car1 = new Car("Ford", "F150", "automatic", 4);
var car2 = new Car("Mercedes", "C180", "manual", 4);
var car3 = new Car("VW", "Passat", "manual", 5);

// ### Create three objects of class Animal ###

var animal1 = new Animal("Elephant", 30000, "big", "grey");
var animal2 = new Animal("Lion", 120000, "middle", "brown");
var animal3 = new Animal("Frog", 24534520521, "small", "green");

// ### Create three objects of class Person ###

var person1 = new Person("Bryan", "Cranston", 65, "actor");
var person2 = new Person("Obi Wan", "Kenobi", 1098707, "Jedi-Master");
var person3 = new Person("Ozzy", "Osbourne", 73, "musician");

// ### Output to browser ###

document.getElementById("car1").innerHTML = car1.carName();
document.getElementById("car2").innerHTML = car2.carName();
document.getElementById("car3").innerHTML = car3.carName();

document.getElementById("animal1").innerHTML = animal1.aniDescri();
document.getElementById("animal2").innerHTML = animal2.aniDescri();
document.getElementById("animal3").innerHTML = animal3.aniDescri();

document.getElementById("person1").innerHTML = person1.fullName();
document.getElementById("person2").innerHTML = person2.fullName();
document.getElementById("person3").innerHTML = person3.fullName();
