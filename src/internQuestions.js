const inquirer = require('inquirer');


const questions = [   
    {
      name: 'employeeName',
      message: 'What is the name of the intern?'
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
      name: 'school',
      message: 'What is the name of the school?'
    },
]
module.exports = questions;
