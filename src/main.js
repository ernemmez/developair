const cli = require('../utils/cli');
const createConfigFile = require('../utils/createConfigFile');
const readAndPrepareData = require('./readProjectAndPrepareData');
const createFineTune = require('../utils/createFineTune');
const checkModel = require('./checkModel');
const askDevelopair = require('./askDevelopair');

const main = async () => {
    const input = cli.input;

    input.includes(`help`) && cli.showHelp(0);


    if (cli.flags.init) createConfigFile();

    switch (cli.input[0]) {
        case 'read-project':
            readAndPrepareData();
            break;
        case 'fine-tune':
            createFineTune();
            break;    
        case 'check-model-status':
            checkModel();
            break;
        case 'ask':
            askDevelopair();
            break;          
        default:
            break;
    }
}

module.exports = main;
