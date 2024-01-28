const inquirer = require('inquirer');
const fs = require('fs');
 
function init() {
    inquirer
  .prompt([{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    validate: (value) =>{if(value){return true} else {return 'I need a value to continue'}},
  },
  {
    type: 'input',
    message: 'Please write a brief description of your project:',
    name: 'description',
    validate: (value) =>{if(value){return true} else {return 'I need a value to continue'}},
  },
  {
    type: 'input',
    message: 'What was your motivation to create this project? (Optional)',
    name: 'motivation',
  },
  {
    type: 'input',
    message: 'What command(s) should be run to install dependencies? (Installation)',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'How do you use your application?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'What command should be run to run tests?',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'What does the user need to know about contributing to the repo?',
    name: 'contribute',
  },
  {
    type: 'list',
    message: 'What kind of license did you use in your project?',
    name: 'license',
    choices: ['MPL', 'MIT', 'Perl','Apache2.0','GPLv3', 'LGPLv3', 'N/A'],
    validate: (value) =>{if(value){return true} else {return 'I need a value to continue'}},
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
    validate: (value) =>{if(value){return true} else {return 'I need a value to continue'}},
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
    validate: (value) =>{if(value){return true} else {return 'I need a value to continue'}},
  },])
  
  .then((data) => {
    const ReadMeFile =
    `# ${data.title}
![Static Badge](https://img.shields.io/badge/${data.license}-%2316A5F3?style=for-the-badge&label=License)
![Static Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&labelColor=black)![Static Badge](https://img.shields.io/badge/Node.js-%23339933?style=for-the-badge&logo=node.js&labelColor=black)
## Description  :bookmark_tabs:
${data.description}. 
${data.motivation}
## Table of Contents :computer:
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
## Installation
  ${data.installation}
## Usage
${data.usage}
## License
The project is licensed under the ${data.license}.
## Contribute
${data.contribute}
## Tests
    ${data.tests}
## Questions
* This is my GitHub: [github.com/${data.github}](https://github.com/${data.github})
* This is my Email: [${data.email}](${data.email})

You can send me an email and ask me any questions you would like.
`
fs.writeFile('README.md', ReadMeFile, (err) => err ? console.log(err) : console.log('Check your new ReadMe!!'))
})
  
}

init();


