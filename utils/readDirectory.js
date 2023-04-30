const fs = require('fs');
const path = require('path');
const { Parser } = require('json2csv');
const createPromptCompletionPairsFile = require('./readCsvFile');

const readDirectory = (dir) => {
  const promise = new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        reject(`Hata: ${dir} dizini okunurken bir hata oluştu: ${err}`);
      }

      const readingData = [];

      files.forEach((fileName) => {
        const filePath = path.join(dir, fileName);
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        if (fs.statSync(filePath).isDirectory()) {
          readDirectory(filePath)
            .then((subDirData) => {
              readingData.push(...subDirData);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          readingData.push({ fileName, filePath, fileContent });
        }
      });

      if (readingData.length > 0) {
        // csv için veri oluştur
        const fields = ['fileName', 'filePath', 'fileContent'];
        const opts = { fields };
        const parser = new Parser(opts);
        const csv = parser.parse(readingData);

        // CSV verisini dosyaya yaz
        fs.writeFile('project_name.csv', csv, (err) => {
          if (err) {
            reject('CSV dosyası oluşturulurken bir hata oluştu: ' + err.message);
          } else {
            console.log('CSV dosyası başarıyla oluşturuldu.');
            createPromptCompletionPairsFile('project_name')
              .then(() => {
                resolve('GPT için prompt ve completion verileri başarıyla oluşturuldu.');
              })
              .catch((err) => {
                reject('GPT için prompt ve completion verileri oluşturulurken bir hata oluştu: ' + err.message);
              });
          }
        });
      } else {
        resolve('Dizinde okunacak dosya yok.');
      }
    });
  });

  return promise;
};

module.exports = readDirectory;
