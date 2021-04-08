// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  const licenseType = license`.${data.license[0]}`;
  let yourLicense = '';
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } 
  if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } 
  if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  }
  return yourLicense; 
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const yourLink = '';
  if(license === 'MIT') {
    yourLink = `<a href = "https://opensource.org/licenses/MIT">License Link</a>`
  } else if (license === 'GPLv3') {
    yourLink = `<a href = "http://perso.crans.org/besson/LICENSE.html">License Link</a>`
  } else if (license === 'GPL') {
    yourLink = `<a href = "http://perso.crans.org/besson/LICENSE.html">License Link</a>`
  } else {
    yourLink = ''
  }
  return yourLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if(license === 'MIT') {
  
  }
}
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
  9. [Questions](#questions)

## Description:
${data.description}

## Installation:
${data.installation}

## Usage:
${data.usage}

## Credits:
${data.credits}

## Licenses:


## Features:
${data.features}

## Contribute:
${data.contribute}

## Test:
${data.test}

## Questions:
Please click the link for Github: <a href = "https://github.com/${data.questions}">My Github Site</a>
Please click the link for my Website: <a href = "${data.questions2}">My Website</a>
`;
}

module.exports = generateMarkdown;