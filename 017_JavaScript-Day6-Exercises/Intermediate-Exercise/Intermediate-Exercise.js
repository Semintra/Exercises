// ### Build table ###

var employeeTable = document.getElementById("employeeTable");

for (i = 0; i < employees.length; i++) {
  employeeTable.innerHTML +=
    "<tr><td>" +
    employees[i].id +
    "</td><td>" +
    employees[i].first_name +
    "</td><td>" +
    employees[i].last_name +
    "</td><td>" +
    employees[i].email +
    "</td><td>" +
    employees[i].job_title +
    "</td><td>" +
    employees[i].salary +
    "</td></tr>";
}
