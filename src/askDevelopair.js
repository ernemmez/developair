const readline = require('readline');

const askDevelopair = () => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question('you: ', (question) => {
      console.log('developair: eren emmez');
      readline.close();
    });
}
  
module.exports = askDevelopair;
  