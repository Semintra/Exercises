/////////////////////////////////////////////////////////

function circleHover() {
  hover = document.getElementById("output");
  hover.innerHTML = "You are in the circle.";
}

function circleLeave() {
  hover = document.getElementById("output");
  hover.innerHTML = "You are outside of the circle.";
}

function circleClick() {
  bgColor = document.getElementsByTagName("body");
  bgColor[0].style.backgroundColor = "grey";
}

function circleDbClick() {
  bgColor = document.getElementsByTagName("body");
  bgColor[0].style.backgroundColor = "blue";
}

document.getElementById("circle").addEventListener("mouseover", circleHover);
document.getElementById("circle").addEventListener("mouseout", circleLeave);
document.getElementById("circle").addEventListener("click", circleClick);
document.getElementById("circle").addEventListener("dblclick", circleDbClick);
