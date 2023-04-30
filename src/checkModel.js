const { openai } = require("../lib/constants")
const fs = require('fs');

const createModelNameFile = (modelName) => {
    console.log('eren -->', modelName);
    if (fs.existsSync(modelName)) {
        const content = fs.readFileSync('model_name.txt', 'utf8');
        
        console.log('model name file zaten var hocam -->', content);
        return;
    } else {
        fs.writeFile('model_name.txt', modelName, (err) => {
            if (err) {
              console.error(err);
              return;
            }

            console.log(`model_name.txt oluşturuldu.`);
        });
    }
};

const checkModel = () => {
    const models = openai.listFineTunes();

    models.then((data) => {
        if (data.data.data[0].status === 'succeeded') {
            const model = data.data.data[0].fine_tuned_model;

            console.log('developair modeli hazır 🥳');
            createModelNameFile(model)
        } else {
            console.log('developair modeli hazırlanıyor ⌛');
        }
    }).catch(err => console.log(err));
}

module.exports = checkModel