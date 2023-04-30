const path = require('path');
const readDirectory = require('../utils/readDirectory');
const readConfigFile = require('../utils/readConfigFile');

const readProjectAndPrepareData = async () => {
    const { projectDir } = readConfigFile();

    console.log('reading project...');

    readDirectory(path.join(__dirname, projectDir));
}

module.exports = readProjectAndPrepareData;
