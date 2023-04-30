const { openai } = require("../lib/constants");
const fs = require('fs');


const askDevelopair = () => {
   const model = fs.readFileSync('model_name.txt', 'utf8');

   const response = openai.createCompletion({
    model,
    prompt: 'main.js dosyasının içeriğini bana anlatır mısın?'
   })

   response.then((data) => {
    console.log(data.data.choices[0].text);
   }).catch(err => console.log(err));
}
  
module.exports = askDevelopair;
  