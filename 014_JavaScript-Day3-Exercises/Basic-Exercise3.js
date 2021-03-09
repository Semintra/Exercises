// ### Create random number ###

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// ### Temp-Checker ###

function tempChecker() {
  var temperature = Math.round(getRandomArbitrary(-10, 40));
  if (temperature < 10) {
    document.getElementById("weatherPic").innerHTML = "cold";
    document.getElementById("weatherText").innerHTML =
      "The weather is cold. (" + temperature + "°C)";
  } else if (temperature < 20) {
    document.getElementById("weatherText").innerHTML =
      "The weather is moderate. (" + temperature + "°C)";
  } else if (temperature < 30) {
    document.getElementById("weatherText").innerHTML =
      "The weather is warm. (" + temperature + "°C)";
  } else {
    document.getElementById("weatherText").innerHTML =
      "The weather is hot. (" + temperature + "°C)";
  }
}

tempChecker();
