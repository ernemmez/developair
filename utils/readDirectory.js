const fs = require('fs');
const path = require('path');
const ProjectData = require('../lib/models/ProjectData');

const readDirectory = (dir) => {
    try {
      const files = fs.readdirSync(dir);
      const readingData = []
  
      files.forEach((fileName) => {
        const filePath = path.join(dir, fileName);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
  
        const data = new ProjectData({ fileName, filePath, fileContent });
  
        data.save();
  
        if (fs.statSync(filePath).isDirectory()) {
          readDirectory(filePath);
        }

        readingData.push({ fileName, filePath, fileContent });
      });

      return { 
        fileCount: readingData.length,
        data: readingData
      };
    } catch (err) {
      console.error(`Error reading directory ${dir}: ${err}`);
    }
}; 

module.exports = readDirectory;