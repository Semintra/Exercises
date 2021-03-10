// ### Create 9 objects (3cars/3animals/3persons) ###

// ### Car 1 ###

var car1 = new Object();

car1.brandName = "Ford";
car1.modelName = "F-150";
car1.gearBox = "automatic";
car1.bodyColor = "black";
car1.carName = function () {
  return this.brandName + " " + this.modelName;
};

// ### Car 2 ###

var car2 = new Object();

car2.brandName = "BMW";
car2.modelName = "520i";
car2.gearBox = "manual";
car2.bodyColor = "blue";
car2.carName = function () {
  return this.brandName + " " + this.modelName;
};

// ### Car 3 ###

var car3 = new Object();

car3.brandName = "Mercedes";
car3.modelName = "CLA220";
car3.gearBox = "automatic";
car3.bodyColor = "silver";
car3.carName = function () {
  return this.brandName + " " + this.modelName;
};

// ### Animal 1 ###

var animal1 = new Object();

animal1.aniName = "Elephant";
animal1.aniColor = "grey";
animal1.aniSize = "bid";
animal1.aniClass = "mammal";
animal1.aniDescri = function () {
  return this.aniName + "s are " + this.aniClass + "s.";
};

// ### Animal 2 ###

var animal2 = new Object();

animal2.aniName = "Fox";
animal2.aniColor = "red";
animal2.aniSize = "middle";
animal2.aniClass = "mammal";
animal2.aniDescri = function () {
  return this.aniName + "es are " + this.aniClass + "s.";
};

// ### Animal 3 ###

var animal3 = new Object();

animal3.aniName = "Frog";
animal3.aniColor = "green";
animal3.aniSize = "small";
animal3.aniClass = "amphibia";
animal3.aniDescri = function () {
  return this.aniName + "s are " + this.aniClass + "ns.";
};

// ### Person 1 ###

var person1 = new Object();

person1.firstName = "Michael";
person1.lastName = "Jordan";
person1.age = "58";
person1.height = "198cm";
person1.fullName = function () {
  return this.firstName + " " + this.lastName;
};

// ### Person 2 ###

var person2 = new Object();

person2.firstName = "Danny";
person2.lastName = "DeVito";
person2.age = "77";
person2.height = "150cm";
person2.fullName = function () {
  return this.firstName + " " + this.lastName;
};

// ### Person 3 ###

var person3 = new Object();

person3.firstName = "Denzel";
person3.lastName = "Washington";
person3.age = "67";
person3.height = "185cm";
person3.fullName = function () {
  return this.firstName + " " + this.lastName;
};

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
