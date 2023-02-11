const inquirer = require('inquirer');


const questions = [   
    {
      name: 'employeeName',
      message: 'What is the name of the engineer?'
    },
    {
        name: 'employeeID',
        message: 'What is the Employee ID?'
    },
    {
        name: 'employeeEmail',
        message: 'What is the email ID?'
    },
    {
      name: 'github',
      message: 'What is the Github username?'
    },
]
module.exports = questions;
