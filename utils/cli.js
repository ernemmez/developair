const meow = require('meow');
const meowHelp = require('cli-meow-help');
const flags = require('../lib/flags');
const commands = require('../lib/commands');

const helpText = meowHelp({
  name: `developair`,
  flags,
  commands
});

const options = {
  inferType: true,
  description: false,
  hardRejection: false,
  flags
};

const cli = meow(helpText, options);

module.exports = cli;
