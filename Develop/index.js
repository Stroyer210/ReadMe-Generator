// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [
// inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: 'What is your user name?',
//       name: 'name',
//     },
//     {
//       type: 'input',
//       message: 'Where do you live?',
//       name: 'location',
//     },
//     {
//       type: 'input',
//       message: 'Tell us something about yourself.',
//       name: 'bio',
//     },
//     {
//       type: 'checkbox',
//       message: 'What technologies do you know?',
//       name: 'tech',
//       choices: ['HTML', 'CSS', 'JS', 'Node.js','React','Python']
//     },
//     {
//       type: 'input',
//       message: 'What is your linkedIn URL?',
//       name: 'linkedIn',
//     },
//     {
//       type: 'input',
//       message: 'What is your GitHub URL?',
//       name: 'GitHub',
//     },
//   ])
// ];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile('README.md', data, (err) => err ? console.log(err) : console.log('Check your new README.md'))
// }

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the description of your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions of it?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What is the usage of your project?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Write some tests for your application:',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Let us know the contribution guidelines:',
      name: 'contribution',
    },
    {
      type: 'list',
      message: 'What kind of license would you like to use in your project?',
      name: 'licenses',
      choices: ['License preferred by the community', 'MIT License', 'GNU GPLv3']
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your Gmail?',
      name: 'gmail',
    },
  ])
  .then((data) => {
    const ReadMeFile =
    `# ${data.title}
![Static Badge](https://img.shields.io/badge/HTML-%23E86B20?style=for-the-badge&logo=html5&labelColor=black)
## Description  :bookmark_tabs:
    ${data.description}
## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Contribute](#contribute)
    - [Tests](#tests)
## Installation :computer:
    ${data.installation}
## Usage :bar_chart:
    ${data.usage}
## Credits :email:
    github.com/${data.github}
## License :memo:
    ${data.installation}
    `
     fs.writeFile('README.md', ReadMeFile, (err) => err ? console.log(err) : console.log('Check your new ReadMe'))
  })
  
