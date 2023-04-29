const fs = require('fs');
const { configFileContent, configFileName } = require('../lib/constants');

module.exports = () => {
    fs.access(configFileName, (err) => {
        if (!err) {
            console.error(`${configFileName} already exists.`);
        } else {
            fs.writeFile(configFileName, configFileContent, (err) => {
                if (err) {
                    console.error('An error occurred while creating the config file:', err);
                } else {
                    console.log(`${configFileName} created successfully`);
                }
            });
        }
    });
};
