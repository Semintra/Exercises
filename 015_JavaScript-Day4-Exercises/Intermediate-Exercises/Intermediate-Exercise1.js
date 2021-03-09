// ### Function to remove the Santas (disappear/opacity) ### //

function santaremove() {
  this.style.opacity = "0";
}

// ### Function to add event handlers to the santas ###

// function santaclick() {
//   var clauses = document.getElementsByClassName("santa");
//   clauses[0].addEventListener("click", santaremove);
//   clauses[1].addEventListener("click", santaremove);
//   clauses[2].addEventListener("click", santaremove);
//   clauses[3].addEventListener("click", santaremove);
// }

// ### Function to add event handlers to the santas (loop) ###

function santaclick() {
  var clauses = document.getElementsByClassName("santa");
  for (i = 0; i < clauses.length; i++) {
    clauses[i].addEventListener("click", santaremove);
  }
}

santaclick();
