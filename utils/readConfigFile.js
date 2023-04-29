const fs = require('fs');
const path = require('path');

const configFile = path.join(process.cwd(), 'developair.config.js');

module.exports = () => {
  try {
    const data = fs.readFileSync(configFile, 'utf-8');
    return eval(data.toString());
  } catch (err) {
    console.error('An error occurred while reading the config file:', err);
    return false;
  }
}
