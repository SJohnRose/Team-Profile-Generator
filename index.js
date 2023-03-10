// import the objects
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateHTML= require("./src/generateHTML");

// import the questions for each type of employee
const managerQuestions = require("./src/managerQuestions");
const engineerQuestions = require("./src/engineerQuestions");
const internQuestions = require("./src/internQuestions");


const inquirer = require('inquirer');
const { default: Choices } = require("inquirer/lib/objects/choices");
const { listenerCount } = require("process");

var ManagerObj;
var EngineerObj;
var InternObj;
var teamDataList = [];


// displays prompt to get team details
async function askQuestions() {
    const answers1 = await inquirer.prompt(managerQuestions);
    ManagerObj = new Manager(answers1.employeeName, answers1.employeeID, answers1.employeeEmail, answers1.officeNumber);
    addToTeamList(ManagerObj);
    while(true) {
        var addAgain = await inquirer.prompt([
        {
            name: 'addMember',
            message: 'Do you want to add a team member or quit?',
            type: 'list',
            choices: ['Engineer', 'Intern', 'Quit'],
        }
        ]);
        
        if (addAgain.addMember == 'Quit') {
            generateHTML(teamDataList);
        }
        else if(addAgain.addMember == 'Engineer') {
            var answers2 = await inquirer.prompt(engineerQuestions);
            EngineerObj = new Engineer(answers2.employeeName, answers2.employeeID, answers2.employeeEmail, answers2.github);
            addToTeamList(EngineerObj);
        }
        else if (addAgain.addMember == 'Intern') {
            var answers2 = await inquirer.prompt(internQuestions);
            InternObj = new Intern(answers2.employeeName, answers2.employeeID, answers2.employeeEmail, answers2.school);
            addToTeamList(InternObj);
        }
    
        
    }
}


// add each new team member to an array to create web page
function addToTeamList(memberObj) {
    teamDataList.push(memberObj);
       
}


askQuestions();
