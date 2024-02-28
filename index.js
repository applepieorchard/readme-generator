const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  "What is the title of your project?",
  "Write a description for your project",
  "Describe any installation instructions",
  "How do you use your application?",
  "What license is your project subject to?",
  "What contribution guidelines do you wish to add?",
  "Any testing instructions for your application?",
  "What is your github username?",
  "What is your email address?"
];

// function to write README file
const writeToFile = (fileName, data) => {
  
}

// function to initialize program
const init = () => {
  
}

// function call to initialize program
init();
