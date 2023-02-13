const employeeFile = require('fs');
const fileName = "team.html";

var employeeData, employeeData1, employeeData2, employeeData234 = " ", employeeData3, employeeData4, employeeData5;

function generateHTML(EmployeeObj) {
    employeeData1 = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./src/style.css" />
      <title>Team Profile</title>
    </head>
    
    <body>
    <!-- Title of the web page -->
        <header>
            <h1>My Team</h1>
        </header>
    
    
        <div class="main">
                <div id="employee-section">`;
    for(i=0; i<EmployeeObj.length; i++) {
        employeeData2 = 
                    `<div class="employee-card">
                        <h1 id="employee-name"> ${EmployeeObj[i].name} </h1>
                        <img id="role-icon" width="50" height="50" alt=""/>
                        <h3 id="employee-role"></h3>
                        <h3 id="employee-id">ID: ${EmployeeObj[i].id}</h3>
                        <h3 id="employee-email">Email: ${EmployeeObj[i].email}</h3>`
                        if (EmployeeObj[i].getRole() == "Manager"){
                            employeeData3 = `<h3 id="employee-officeNumber">Office Number: ${EmployeeObj[i].officeNumber}</h3>`
                        }
                        else if (EmployeeObj[i].getRole() == "Engineer"){
                            employeeData3 = `<h3 id="employee-github">Github Name: ${EmployeeObj[i].github}</h3>`
                        }
                        else if (EmployeeObj[i].getRole() == "Intern"){
                            employeeData3 = `<h3 id="employee-school">School Name: ${EmployeeObj[i].school}</h3>`
                        }

        employeeData4 = `</div>` ;
        employeeData234 = employeeData234 + employeeData2 + employeeData3 + employeeData4;
    }                
    employeeData5 =             
                `</div>
            </div>
        </div>
    
    </body>
    
    </html>`;
    employeeData = employeeData1 + employeeData234 + employeeData5;
    employeeFile.writeFileSync(fileName, employeeData, (err) =>
       err ? console.error(err) : console.log('Success!')
    );
    process.exit();
}

module.exports = generateHTML;