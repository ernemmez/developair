const fs = require('fs');
const path = require('path');
const { Parser } = require('json2csv');
const readCsvFile = require('./readCsvFile');

const readDirectory = (dir) => {
  try {
    const files = fs.readdirSync(dir);
    const readingData = []

    files.forEach((fileName) => {
      const filePath = path.join(dir, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf-8');

      if (fs.statSync(filePath).isDirectory()) {
        readDirectory(filePath);
      }

      readingData.push({ fileName, filePath, fileContent });
    });

    try {
      if (readingData.length > 0) {
        //csv için veri oluştur
        const fields = ['fileName', 'filePath', 'fileContent'];
        const opts = { fields };
        const parser = new Parser(opts);
        const csv = parser.parse(readingData);
    
        // CSV verisini dosyaya yaz
        fs.writeFileSync('project_name.csv', csv);
        console.log('CSV dosyası başarıyla oluşturuldu.');

        readCsvFile('project_name'); // gpt 'yi eğitecek prompt ve completion 'lardan oluşan bir json dosyası oluşturur.
      }
    } catch (err) {
      console.log('CSV dosyası oluşturulurken bir hata oluştu: ' + err.message);

      return false;
    }

    return true; // başarıyla okundu
  } catch (err) {
    console.error(`Hata: ${dir} dizini okunurken bir hata oluştu: ${err}`);

    return false; // directory okunurken hata oluştu
  }
};

module.exports = readDirectory;
