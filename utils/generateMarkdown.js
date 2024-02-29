// function to generate markdown for README
const generateMarkdown = (data) => {
  return `
    # ${data.title}
    
    ## Description
    
    ${data.description}

    ## Table of Contents

    [Installation](#installation)
    [Usage](#usage)
    [License](#license)
    [Contributing](#contributing)
    [Tests](#tests)
    [Questions](#questions)

    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}

    ## License

    This project is subject to the [${data.license}](LICENSE).

    ## Contributing

    ${data.contributing}

    ## Tests

    ${data.tests}

    ## Questions

    If you have any questions you can contact me on github [@${data.github}](https://github.com/${data.github}) or email at [${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;
