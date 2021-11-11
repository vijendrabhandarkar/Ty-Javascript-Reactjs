
debugger
let employeeData = [];
let tableData = [];
const stringifiedEmployeeData = localStorage.getItem("employeeData");
const displayData = JSON.parse(stringifiedEmployeeData);
if (displayData) {
  employeeData = displayData;
}
displayEmployeeData(employeeData);

function displayEmployeeData(employeeData) {
  tableData = `<table>
                    <thead>
                        <tr> 
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        </tr>
                        </thead>
                        `;

  employeeData.forEach((employee) => {
    tableData += `<tr>
                        <td>${employee.fname}</td>
                        <td>${employee.lname}</td>
                        <td>${employee.age}</td>
                    </tr>`;
  });
  tableData += `</table>`;
  document.getElementById("employeeData").innerHTML = tableData;
}
function addRow() {
  // get input values
  debugger
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var age = document.getElementById("age").value;
  const employee = {
    fname: fname,
    lname: lname,
    age: age,
  };

  employeeData.push(employee);
  localStorage.setItem("employeeData", JSON.stringify(employeeData));
  displayEmployeeData(employeeData);
}
