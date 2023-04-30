const fs = require('fs');
const { configFileContent, configFileName } = require('../lib/constants');

const createConfigFile = () => {
  return new Promise((resolve, reject) => {
    fs.access(configFileName, (err) => {
      if (!err) {
        console.error(`${configFileName} already exists.`)
        reject(false);
      } else {
        fs.writeFile(configFileName, configFileContent, (err) => {
          if (err) {
            console.error(`An error occurred while creating the config file: ${err}`);
            reject(false);
          } else {
            resolve(true);
          }
        });
      }
    });
  });
};

module.exports = createConfigFile;
