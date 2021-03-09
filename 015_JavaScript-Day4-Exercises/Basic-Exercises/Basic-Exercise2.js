// ### Function to output data into new <div> ###

function extract() {
  var fname = document.getElementById("firstname").value;
  var lname = document.getElementById("lastname").value;
  var userAge = document.getElementById("age").value;
  var userProf = document.getElementById("profession").value;

  // ### Check if there are any values at all ###

  if (fname + lname + userAge + userProf != "") {
    document.getElementById("output").innerHTML =
      "Name:<br>" + fname + "<br>" + lname + "<br>Age: " + userAge;
  }

  // ### Check for length of name (color green/red) ###

  if (fname.length + lname.length > 5) {
    document.getElementById("output").style.color = "green";
  } else {
    document.getElementById("output").style.color = "red";
  }

  // ### Check for profession (background-color purple/yellow) ###

  if (userProf === "IT") {
    document.getElementById("output").style.backgroundColor = "yellow";
  } else if (userProf === "Hospitality") {
    document.getElementById("output").style.backgroundColor = "purple";
  } else {
    document.getElementById("output").style.backgroundColor = "transparent";
  }
}

// ### Add EventListener to HTML-Button ###

document.getElementById("extButton").addEventListener("click", extract);
