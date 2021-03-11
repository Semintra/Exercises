// ### Parse JSON-formatted text ###

var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

var sandwiches = JSON.parse(sandwiches);
var fries = JSON.parse(fries);

// ### Output to the browser ###

document.getElementById("container").innerHTML =
  "My favorite sandwich is a " +
  sandwiches.sandwich +
  " which has approximately " +
  sandwiches.calories +
  " calories, along with it I enjoy eating " +
  fries.fries_size +
  " which have about " +
  fries.calories +
  " calories.";
