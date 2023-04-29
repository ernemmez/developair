const path = require('path');
const mongoose = require('mongoose');
const readConfigFile = require('../utils/readConfigFile');
const readDirectory = require('../utils/readDirectory');

const readProject = () => {
    const developairConfig = readConfigFile();
    const { mongoDBUrl, projectDir } = developairConfig;

    console.log('reading project...');

    mongoose.connect(mongoDBUrl, { useNewUrlParser: true });

    const dirIsRead = readDirectory(path.join(__dirname, projectDir));

    if (dirIsRead) {
        //ana eğitim texti ile gpt'i eğit. (bu eğitim developair'in görevini gpt ye anlatır ve gpt'nin kendisini developair olarak benimsemesini sağlar)
        //prompt_completion_pairs.json ile gpt'yi eğit. (bu eğitim projenin okunan dosyaları ile developair'i eğitir.)
    } else {
        throw new Error(`😔 project_name okunurken bir hata oluştu.`);
    }
}

module.exports = readProject;
