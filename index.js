// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');
const { ifError } = require('assert');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Briefly describe the what, why, and how of your project.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use of your project.'
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List your collaborators with links to their GitHub profiles.'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What licenses are used?',
    choices: ['Apache 2.0', 'GNU General Public License v3.0', 'MIT License', 'None']
  }
]
 
inquirer
  .prompt(
    questions
  )
  .then((answers) => {
    console.log(answers)
    const template = generateMarkdown(answers)
    console.log(template)
    writeToFile('./utils/README.md', template)
  })
  .catch((error) => {
    console.log(error)
  });

    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err)=> {
    if (err) throw err
    console.log("Success!")
  })
}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();


