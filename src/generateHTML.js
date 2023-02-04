const employeeFile = require('fs');
const fileName = "temp.html";

function generateHTML(EmployeeObj) {
    var EmployeeData = `<!DOCTYPE html>
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
                <div id="employee-section">
                    <div class="employee-card">
                        <h1 id="employee-name"> ${EmployeeObj.name} </h1>
                        <img id="role-icon" width="50" height="50" alt=""/>
                        <h3 id="employee-role"></h3>
                        <h3 id="employee-id">ID: ${EmployeeObj.id}</h3>
                        <h3 id="employee-email">Email: ${EmployeeObj.email}</h3>
                        <h3 id="employee-officeNumber">Office Number: ${EmployeeObj.officeNumber}</h3>
                    </div> 
                    
                </div>
            </div>
        </div>
    
    </body>
    
    </html>`;
    employeeFile.writeFile(fileName, EmployeeData, (err) =>
       err ? console.error(err) : console.log('Success!')
    );
    
}

module.exports = generateHTML;