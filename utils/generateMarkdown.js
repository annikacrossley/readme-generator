// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0') {
    return `![Static Badge](https://img.shields.io/badge/License-Apache2.0-brightgreen)
    `
  } else if (license === 'GNU General Public License v3.0') {
    return `![Static Badge](https://img.shields.io/badge/License-GNUGeneralPublicLicensev3.0-brightgreen)
    `
  } else if (license === 'MIT License') {
    return `![Static Badge](https://img.shields.io/badge/License-MITLicense-brightgreen)
    `
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache 2.0') {
    return `[http://www.apache.org/licenses/](http://www.apache.org/licenses/)
    `
  } else if (license === 'GNU General Public License v3.0') {
    return `[https://www.fsf.org/](https://www.fsf.org/)
    `
  } else if (license === 'MIT License') {
    return `[https://mit-license.org/](https://mit-license.org/)
    `
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache 2.0') {
    return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
    `
  } else if (license === 'GNU General Public License v3.0') {
    return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
  } else if (license === 'MIT License') {
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

##Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
`
}

module.exports = generateMarkdown;
