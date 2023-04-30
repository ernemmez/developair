const { openai } = require("../lib/constants")

const createModelNameFile = (modelName) => {
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
        if (data.data.data.status === 'succeeded') {
            const model = data.data.data.fine_tuned_model;

            console.log('developair modeli hazır 🥳');
            createModelNameFile(model)
        } else {
            console.log('developair modeli hazırlanıyor ⌛');
        }
    }).catch(err => console.log(err));
}

module.exports = checkModel