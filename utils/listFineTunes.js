const { openai } = require('../lib/constants');

const listFineTunes = async () => {
    try {
        const response = await openai.listFineTunes();
        
        return response.data.data;
    } catch (err) {
        console.log('error:', err);
    }
} 

module.exports = listFineTunes;
