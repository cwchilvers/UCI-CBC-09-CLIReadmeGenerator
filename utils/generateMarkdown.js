// Function to take user input data from and add it into the contents of the README file
function generateMarkdown(data) {

// Licenses and license info
const licenses = {
    apache: {
        name: 'APACHE 2.0',
        badge:'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        link: 'https://opensource.org/licenses/Apache-2.0'
    },  
    gpl: {
        name: 'GPL 3.0',
        badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        link: 'https://www.gnu.org/licenses/gpl-3.0'
    },
    
    bsd: {
        name: 'BSD 3',
        badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
        link: 'https://opensource.org/licenses/BSD-3-Clause'
    }
}

let badge;
let name;
let link;

switch (data.license) {
    case 'APACHE 2.0' :
        name = licenses.apache.name;
        badge = licenses.apache.badge;
        link = licenses.apache.link;

    case 'GPL 3.0' :
        name = licenses.gpl.name;
        badge = licenses.gpl.badge;
        link = licenses.gpl.link;

    case 'BSD 3' :
        name = licenses.bsd.name;
        badge = licenses.bsd.badge;
        link = licenses.bsd.link;
}
    
// Create beginning of README    
    let markdown = `# ${data.title}
`

if (data.license !== 'None') {
    markdown = markdown + `
${badge}
`
}  

  markdown = markdown + `
## Table of Contents`;

// Create table of contents for sections that exist
    if (data.description !== '') {
        markdown = markdown + `
* [Description](#description)`;    
    }

    if (data.installation !== '') {
        markdown = markdown + `
* [Installation](#installation)`;    
    }

    if (data.usage !== '') {
        markdown = markdown + `
* [Usage](#usage)`;    
    }

    if (data.license !== 'None') {
        markdown = markdown + `
* [License](#license)`;    
    }

    if (data.contributing !== '') {
        markdown = markdown + `
* [Contributing](#contributing)`;    
    }

     if (data.tests !== '') {
        markdown = markdown + `
* [Tests](#tests)`;    
    }   

    if (data.questions !== '') {
        markdown = markdown + `
* [Questions](#questions)`;
    }

// Add a break
markdown = markdown + `
`;    

// Add sections
    // Add description section (if it exists)
    if (data.description !== '') {
        markdown = markdown + `
## Description
${data.description}
`;    
    }

    // Add installation section (if it exists)
    if (data.installation !== '') {
        markdown = markdown + `
## Installation
${data.installation}
`;    
    }

    // Add usage section (if it exists)
    if (data.usage !== '') {
        markdown = markdown + `
## Usage
${data.usage}
`;    
    }

    // Add license section (if it exists)
    if (data.license !== 'None') {
        markdown = markdown + `
## License
This application is covered by the [${name}](${link}) license.
`;    
    }

    // Add contributing section (if it exists)
    if (data.contributing !== '') {
        markdown = markdown + `
## Contributing
${data.contributing}
`;    
    }

     // Add tests section (if it exists)
     if (data.tests !== '') {
        markdown = markdown + `
## Tests
${data.tests}
`;    
    }   

    // Add questions section (if it exists)
    if (data.questions !== '') {
        markdown = markdown + `
## Questions
GitHub: ${data.username}

Email: ${data.email}`;
    }

    return markdown;
}

// Make the createReadme function accessible outside of script 
module.exports = generateMarkdown;