const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateHTML= require("./src/generateHTML");
const commonQuestions = require("./src/questions");


const inquirer = require('inquirer');
const { default: Choices } = require("inquirer/lib/objects/choices");
const { listenerCount } = require("process");

var ManagerObj;
var EngineerObj;
var InternObj;
var teamDataList = [];
var teamRole;


function buildTeam() {
    inquirer.prompt(commonQuestions).then((answers) => {
    //console.info('Answer:', answers);
        inquirer.prompt([
        {
            name: 'officeNumber',
            message: 'What is your Office Number?'
        },
        ])
        .then(managerData => {

            ManagerObj = new Manager(answers.employeeName, answers.employeeID, answers.employeeEmail, managerData.OfficeNumber);
            addToTeamList(ManagerObj);
        });
    });
    teamRole = function() {
        inquirer.prompt([
        {
            name: 'role',
            message: 'Which team member do you want to add? (Use arrow key)',
            type: 'list',
            choices: ['Engineer', 'Intern', 'End Process']
        },
        ])
        .then((teamRoleInfo) => {
            if (teamRoleInfo.role == "Engineer") {
                inquirer.prompt(commonQuestions).then((engineerData) => {
                    console.info('Answer:', engineerData);
                    inquirer.prompt([
                    {
                        name: 'github',
                        message: 'What is your Github Profile ID?'
                    },
                ])
                .then(engineerGithub =>  {
                    EngineerObj = new Engineer(engineerData.employeeName, engineerData.employeeID, engineerData.employeeEmail, engineerGithub.github);
                    addToTeamList(EngineerObj);
                    teamRole();
                });
                });
            }
            else if (teamRoleInfo.role == "Intern") {
                inquirer.prompt(commonQuestions).then((internData) => {
                console.info('Answer:', internData);
                inquirer.prompt([
                {
                    name: 'school',
                    message: 'What is your school name?'
                },
                ])
                .then(internSchool =>  {
                    InternObj = new Intern(internData.employeeName, internData.employeeID, internData.employeeEmail, internSchool.school);
                    addToTeamList(InternObj);
                    teamRole();
                })
                });
            }
            else if (teamRoleInfo.role == "End Process") {
                //console.info("End" + answers);
                generateHTML(teamDataList[0]);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }
}


function addToTeamList(memberObj) {
    teamDataList.push(memberObj);
    console.log(teamDataList);
    
}


buildTeam();