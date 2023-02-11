const inquirer = require('inquirer');


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
  ]
  
  module.exports = questions;
