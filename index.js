const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Write a description for your project"
  },
  {
    type: "input",
    name: "installation",
    message: "Describe any installation instructions"
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your application?"
  },
  {
    type: "input",
    name: "license",
    message: "What license is your project subject to?"
  },
  {
    type: "input",
    name: "contributing",
    message: "What contribution guidelines do you wish to add?"
  },
  {
    type: "input",
    name: "tests",
    message: "Any testing instructions for your application?"
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  }
];

// function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFileSync(fileName, data)
};

// function to initialize program
const init = () => {
  inquirer.prompt(questions)
    .then((answers) => writeToFile("./generated/README.md", generateMarkdown(answers)))
};

// function call to initialize program
init()