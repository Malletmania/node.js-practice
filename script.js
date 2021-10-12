const inquirer = require('inquirer')

const choiceArray = ["Javascript", "js", "CSS"]
inquirer
    .prompt([
        {
            type: 'input',
            message: 'what is your user name?',
            name: 'username',
        },
        {
            name: 'languagechoices',
            type: 'checkbox',
            message: 'what languages do you know?',
            choices: choiceArray,
        },
        {
            name: 'communicationchoice',
            type: 'list',
            message: 'What is you prefered method of communication?',
            choices: ["Bird", "Instagram", "Text"],  
        }
    ])
    .then( (response) => {
        console.log(response.languagechoices, response.communicationchoices);
    });