const { Configuration, OpenAIApi } = require('openai');
const fs = require('fs');
const listFineTunes = require('../utils/listFineTunes');
const { openai } = require('../lib/constants');

const createCompletion = async () => {
    try {
        const response = await openai.createCompletion({
          model: 'your-custom-model-name',
          prompt: 'bu projede console.log ile console veri yazdırdığım kısımları gösterebilir misin?'
        })
        if (response.data) {
          console.log('choices: ', response.data.choices)
        }
      } catch (err) {
        console.log('err: ', err)
      }
} 


const fineTuning = async (promptCompletionPairsFilePath) => {
    if (apiKey && promptCompletionPairsFilePath) {

        // const fileID = await createFineTuneFile(openai, promptCompletionPairsFilePath);

        // const fineTune = await createFineTune(openai, fileID);

        if (true) {
            const fineTuneList = await listFineTunes(openai);

            console.log('fine-tune başarıyla oluşturuldu.', fineTuneList);
        }
    } else {
        console.error(`${promptCompletionPairsFilePath} bulunamadı!`);
    }
};

module.exports = fineTuning;
























//const lines = fs.readFileSync(promptCompletionPairsFilePath, 'utf-8').split('\n'); // prompt-completion pairs dosyasını oku

   // try {
        //     console.log('fine tuning işlemi başladı...')

        //     // const fineTuneResult = await openai.createFineTune({
        //     //     model: 'gpt-4',
        //     //     training_file: promptCompletionPairsFilePath,
        //     //     max_tokens: 99999
        //     // });

        //     console.log('Fine tuning işlemi başarıyla tamamlandı:', fineTuneResult);
        //     // const response = lines.map(async (line,index) => {  // Fine tuning işlemi için gereken parametreleri belirler
        //     //     const [prompt, target] = line.trim().split('\t');
        //     //     const training_file = { prompt, target };

        //     //     if (index === 0) {
        //     //         console.log(line)
        //     //     }
        //     //     return await openai.createFineTune({ training_file });
        //     // });
        //     // const fineTuneResult = await fs.readFile(promptCompletionPairsFilePath, 'utf8', async (err, data) => {
        //     //     if (err) console.error(err);
              
        //     //     // JSON verilerini JavaScript nesnesine dönüştür
        //     //     const obj = JSON.parse(data);
              
        //     //     return await openai.createFineTune({ training_file: obj });
        //     //   });            
        // } catch (err) {
        //     console.error('Fine tuning işlemi sırasında bir hata oluştu:', err);
        // }