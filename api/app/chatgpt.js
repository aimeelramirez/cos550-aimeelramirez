//gets configuration
const {
  Configuration,
  OpenAIApi
} = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
//gets new object
const openai = new OpenAIApi(configuration);
//function to start API
//returns the request from async await function
const chatGpt = async (prompt) => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0,
      max_tokens: 1000
  
    });
    //console.log(response.data.choices[0].text)
    return response.data.choices[0].text
  };

  module.exports = chatGpt;