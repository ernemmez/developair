const fs = require('fs');
const csv = require('csv-parser');

const data = [];

const readCsvFile = (fileName) => {
  try {
    if (!fs.existsSync(`${fileName}.csv`)) {
      throw new Error(`File does not exist: ${fileName}.csv`);
    }

    fs.createReadStream(`${fileName}.csv`)
      .on('error', (err) => {
        throw new Error(`Error reading file: ${fileName}.csv`);
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
        const prompt = `
            <project_name> projesinde ki ${fileName} dosyasının içeriği:\n
            ${fileContent.replace(/\n/g, '\\n')}
        `;
        const completion = `${filePath} okundu ✅`
        
        data.push({ prompt, completion });
      })
      .on('end', () => {
        fs.writeFile('prompt_completion_pairs.json', JSON.stringify(data, null, 2), (err) => {
          if (err) {
            throw new Error(`Error writing file: prompt_completion_pairs.json`);
          } else {
            console.log('Prompt ve completion objeleri prompt_completion_pairs.json dosyasına kaydedildi');
          }
        });
      });
  } catch (err) {
    console.error(`Hata: ${err.message}`);
  }
};

module.exports = readCsvFile;
