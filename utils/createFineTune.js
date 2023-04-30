const { openai } = require('../lib/constants');
const fs = require('fs');

const openAiFinetune = (training_file) => {
  const response = openai.createFineTune({
    model: 'gpt-3.5-turbo',
    training_file
  });

  response.then((data) => {
      setInterval(() => {
        const liveModels = openai.listFineTuneEvents(data.data.id, false);

        liveModels.then((data) => {
          console.log(data.data.data);

          if (data.data.data.message === 'Fine-tune succeeded') {
            console.log('fine tune işlemi başarıyla tamamlandı.');

            return;
          }
        }).catch(err => console.log(err));
      }, 1000);
  }).catch(err => console.log(err));
}

const createFineTune = async () => {
  if (fs.existsSync('model_file_id.txt')) {
    const content = fs.readFileSync('model_file_id.txt', 'utf8');

    console.log('file zaten var aha bu da kanıtı -->', content);
    openAiFinetune(content);
  } else {
    const prepareData = openai.createFile(fs.createReadStream('./prompt_completion_pairs.jsonl'), 'fine-tune');

    prepareData.then((data) => {
      if (data.data.id) {
        const content = data.data.id
        const fileName = `model_file_id.txt`;
      
        fs.writeFile(fileName, content, (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(`${fileName} oluşturuldu.`);
        });  

        openAiFinetune(content);
      }
    }).catch((err) => console.log(err));  
  }
}

module.exports = createFineTune;
