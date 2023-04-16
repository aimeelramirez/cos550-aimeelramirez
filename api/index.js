
const express = require("express");
//get api
const app = express();
//reads the env
require('dotenv').config();
//gets configuration
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

//set the port number
app.set("port", process.env.PORT || 3000);
// temp prompt from client 
let prompt = "In a NABRE bible religious belief, is God real? Provide a verse from NABRE bible."

//function to start API
const startAPI = async ()=> {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0,
    max_tokens: 1000

  });

console.log(response.data.choices[0].text);
return response
};

// defines the first routess
app.get("/", function (req, res) {
  let intro = `<h1>cos550-aimeelramirez-api</h1>
  <p>This is an open endpoint with not authenication needed at the moment.</p>`;
  res.send(intro);
  //returns the request from async await function
  let apiTest = startAPI();
  console.log(apiTest);
})
app.listen(app.get("port"), function () {
  console.log("Node app is running at localhost:" + app.get("port"));
});