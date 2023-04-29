const path = require('path');
const mongoose = require('mongoose');
const readConfigFile = require('../utils/readConfigFile');
const readDirectory = require('../utils/readDirectory');

const readProject = () => {
    const developairConfig = readConfigFile();
    const { mongoDBUrl, projectDir } = developairConfig;

    console.log('reading project...');

    mongoose.connect(mongoDBUrl, { useNewUrlParser: true });

    const { fileCount, data:readingData } = readDirectory(path.join(__dirname, projectDir));

    if (fileCount > 0) {
        console.log('eren -->', readingData);
    }
}

module.exports = readProject;

git remote add origin https://github.com/ernemmez/developair.git
git pull origin main
git add .
git commit -m "Initial commit"
git push -u origin main