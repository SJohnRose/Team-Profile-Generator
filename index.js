const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const inquirer = require('inquirer');
const { default: Choices } = require("inquirer/lib/objects/choices");
const { listenerCount } = require("process");

var ManagerObj;
var EngineerObj;
var InternObj;


function buildTeam() {
inquirer
  .prompt([
    {
      name: 'employeeName',
      message: 'What is your name?'
    },
    {
        name: 'employeeID',
        message: 'What is your Employee ID'
    },
    {
        name: 'employeeEmail',
        message: 'What is your email ID?'
    },
    {
        name: 'officeNumber',
        message: 'What is your Office Number?'
    },
    {
        name: 'employeeAdd',
        message: 'Which team member do you want to add? (Use arrow key)',
        type: 'list',
        choices: ['Engineer', 'Intern', 'End Process']
    },
  ])
  .then(answers => {
    //console.info('Answer:', answers);
    if (answers.employeeAdd == "Engineer") {
        inquirer
            .prompt([
            {
                name: 'employeeGithub',
                message: 'What is your Github Profile ID?'
            },
        ])
        .then(result =>  {
            EngineerObj = new Engineer(answers.employeeName, answers.employeeID, answers.employeeEmail, result.employeeGithub);
            
            
        })
    }
    else if (answers.employeeAdd == "Intern") {
        inquirer
            .prompt([
            {
                name: 'employeeSchool',
                message: 'What is your school name?'
            },
        ])
        .then(result =>  {
            InternObj = new Intern(answers.employeeName, answers.employeeID, answers.employeeEmail, result.employeeSchool);
            
        })
    }
    else if (answers.employeeAdd == "End Process") {
        console.log("End");
        generateHTML(ManagerObj, EngineerObj, InternObj);
    }
    else {
        ManagerObj = new Manager(answers.employeeName, answers.employeeID, answers.employeeEmail, answers.EmployeeOfficeNumber);
        console.log(ManagerObj.getName());
        
    }
  })
  .catch(error => {
    console.log(error);
  });
}

buildTeam();