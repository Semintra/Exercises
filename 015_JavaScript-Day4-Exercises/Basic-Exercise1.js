// ### Function to output data into new <div> ###

function extract() {
  var fname = document.getElementById("firstname").value;
  var lname = document.getElementById("lastname").value;
  var userAge = document.getElementById("age").value;

  document.getElementById("output").innerHTML =
    "Name:<br>" + fname + "<br>" + lname + "<br>Age: " + userAge;

  // ### Check for length of name (green/red) ###

  if (fname.length + lname.length > 5) {
    document.getElementById("output").style.color = "green";
  } else {
    document.getElementById("output").style.color = "red";
  }
}
