const readConfigFile = require("../utils/readConfigFile");
const { Configuration, OpenAIApi } = require('openai');

const configFileName = 'developair.config.js';
const configFileContent = `module.exports = {
  //add configuration here
  openai_api_key: '',
  projectDir: './',
  projectName: ''
};`;

//const { openai_api_key: apiKey } = readConfigFile();

const configuration = new Configuration({ apiKey: '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' });
const openai = new OpenAIApi(configuration);

module.exports = {
    configFileContent,
    configFileName,
    openai
}