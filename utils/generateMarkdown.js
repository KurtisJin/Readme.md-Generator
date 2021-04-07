// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const noLicense = '';

function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents:
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Credits](#credits)
  5. [License](#license)
  6. [Features](#features)
  7. [Contirbute](#contribute)
  8. [Test](#test)

## Description:
${data.description}

## installation:
${data.intallation}

## Usage:
${data.usage}

## Credits:
${data.credits}

## License:
${data.license}

## Features:
${data.features}

## Contribute:
${data.contribute}

## Test:
${data.test}

`;
}

module.exports = generateMarkdown;
