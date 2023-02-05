const inquirer = require('inquirer');

// function askQuestions() {
 
// inquirer
//   .prompt([
const questions = [   
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
]
  module.exports = questions;
