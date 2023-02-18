const employeeFile = require('fs');
const fileName = "team.html";

var employeeHTML, empHTMLStart, empDetails, empData, empCard = " ", empEndDiv, empEndBody, empNameIcon;
var currentRole;
var icon;

function generateHTML(EmployeeObj) {
    //  HTML for the head and top of body section
    empHTMLStart = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
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
    // HTML for generating a card for each employee in team
    for(i=0; i<EmployeeObj.length; i++) {
        currentRole = EmployeeObj[i].getRole();
        empNameIcon = 
                    `<div class="employee-card">
                        <div class = "emp-header mb-3">
                        <h3 id="employee-name"> ${EmployeeObj[i].name} </h3>
                        <div class = "sub-header">`
                        if (currentRole == "Manager"){
                            icon = "assets/manager.png";}
                        else if (currentRole == "Engineer"){
                            icon = "assets/engineer.png";
                        }
                        else if (currentRole == "Intern"){
                            icon = "assets/intern.png";
                        }
        empDetails =
                        `<img id="role-icon" width="50" height="50" src = "${icon}"/>
                        <h5 id="employee-role">${EmployeeObj[i].getRole()}</h5>
                            </div>
                        </div>
                        <div class="bottom-section">
                        <h5 id="employee-id">ID: ${EmployeeObj[i].id}</h5>
                        <h5 id="employee-email">Email: <a href = "mailto: ${EmployeeObj[i].email}">${EmployeeObj[i].email}</a></h5>`
                        if (currentRole == "Manager"){
                            empData = `<h5 id="employee-officeNumber">Office Number: ${EmployeeObj[i].officeNumber}</h5>`
                        }
                        else if (currentRole == "Engineer"){
                            empData = `<h5 id="employee-github">Github Name: <a href = "http://github.com/${EmployeeObj[i].github}">${EmployeeObj[i].github}</a> </h5>`
                        }
                        else if (currentRole == "Intern"){
                            empData = `<h5 id="employee-school">School Name: ${EmployeeObj[i].school}</h5>`
                        }

        empEndDiv = `</div> </div>` ;
        empCard = empCard + empNameIcon + empDetails + empData + empEndDiv;
    }                
    empEndBody =             
                `</div>
            </div>
        </div>
    
    </body>
    
    </html>`;
    employeeHTML = empHTMLStart + empCard + empEndBody;
    employeeFile.writeFileSync(fileName, employeeHTML, (err) =>
       err ? console.error(err) : console.log('Success!')
    );
    process.exit();
}

module.exports = generateHTML;