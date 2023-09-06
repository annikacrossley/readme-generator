// TODO: Include packages needed for this application
import fs from 'fs'
import inquirer from 'inquirer'

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
    type: 'input',
    name: 'license',
    message: 'What licenses are used?'
  }
]
 
inquirer
  .prompt(
    questions
  )
  .then((answers) => {
    console.log(answers)
  })
  .catch((error) => {
    console.log(error)
    // if (error.isTtyError) {
    //   // Prompt couldn't be rendered in the current environment
    // } else {
    //   // Something else went wrong
    // }
  });

    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // const readme = generateSlug(answers.title, {
    //   format: 'title'
    // })
}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();


