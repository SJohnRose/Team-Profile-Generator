const inquirer = require('inquirer');


function askQuestions() {
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
        console.log(answers);
        return answers})
    .catch(error => {
        console.log(error)
    });
    }
  

  module.exports = askQuestions();
