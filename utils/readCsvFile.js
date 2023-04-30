const fs = require('fs');
const csv = require('csv-parser');

const readCsvFile = (fileName) => {
  return new Promise((resolve, reject) => {
    try {
      if (!fs.existsSync(`${fileName}.csv`)) {
        throw new Error(`File does not exist: ${fileName}.csv`);
      }

      const data = [];

      fs.createReadStream(`${fileName}.csv`)
        .on('error', (err) => {
          reject(`Error reading file: ${fileName}.csv`);
        })
        .pipe(csv())
        .on('data', (row) => {
          const fileName = row['fileName'];
          const filePath = row['filePath'];
          const fileContent = row['fileContent']; 

          // 'File Content' sütunu boşsa, atla
          if (!fileContent) {
            console.log(`File Content değeri olmayan bir satır var: ${fileName}`);
            return;
          }
          //***** TO DO: bir ana prompt hazırlanması lazım kendisinin ne olduğunu anlatan ve görevini anlatan bir prompt olacak.*****
          const prompt = `<project_name> projesinde ki ${fileName} dosyasının içeriği: ${fileContent.replace(/\n/g, '\\n')}`;
          const completion = `${filePath} okundu ✅`

          data.push({ prompt, completion });
        })
        .on('end', () => {
          resolve(data);
        });
    } catch (err) {
      reject(err.message);
    }
  });
};

const createPromptCompletionPairsFile = (fileName) => {
    return new Promise((resolve, reject) => {
        readCsvFile(fileName)
          .then((data) => {
            const stream = fs.createWriteStream('prompt_completion_pairs.jsonl', { flags: 'a' });
            data.forEach((row) => {
              stream.write(`${JSON.stringify(row)}\n`);
            });
            stream.end(() => {
              resolve(true);
            });
          })
          .catch((err) => {
            reject(`Error: ${err}`);
          });
    });      
};

module.exports = createPromptCompletionPairsFile;
