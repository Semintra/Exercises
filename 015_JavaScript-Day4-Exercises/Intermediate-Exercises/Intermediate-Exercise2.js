// ### Function random numbers min/max ###

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// ### Function to assign random color to body(rgb) ###

function colorpicker() {
  var colorR = Math.floor(getRandomArbitrary(0, 256));
  var colorG = Math.floor(getRandomArbitrary(0, 256));
  var colorB = Math.floor(getRandomArbitrary(0, 256));
  var bodyRGB = document.getElementsByTagName("body");
  bodyRGB[0].style.backgroundColor =
    "rgb(" + colorR + "," + colorG + "," + colorB + ")";
  console.log(colorR, colorG, colorB);
}

document.getElementById("RGB").addEventListener("click", colorpicker);
