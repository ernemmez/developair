const cli = require('../utils/cli');
const createConfigFile = require('../utils/createConfigFile');
const readProject = require('./readProject');
const input = cli.input;

const main = () => {
    input.includes(`help`) && cli.showHelp(0);


    if (cli.flags.init) createConfigFile();

    if (cli.input[0] === 'read-project') {
        readProject()
    }
}

module.exports = main;
