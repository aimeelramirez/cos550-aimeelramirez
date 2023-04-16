const express = require("express");
//get api
const app = express();
//reads the env
require('dotenv').config();
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

//set the port number
app.set("port", process.env.PORT || 3000);
// checks if content-type is json & parses into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//function to start API
//returns the request from async await function
const startAPI = async (prompt) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0,
    max_tokens: 1000

  });
  //console.log(response.data.choices[0].text)
  return response.data.choices[0].text
};
// defines the first routess
app.get("/", function (req, res) {
  let intro = `<h1>cos550-aimeelramirez-api</h1>
  <p>This is an open endpoint with not authenication needed at the moment.</p>`;
  //temp prompt from client 
  let prompt = "In a NABRE bible religious belief, is God real? Provide a verse from NABRE bible."
  startAPI(prompt).then((data) => {
    console.log(data)
    res.send(intro + "<br/>" + data);
  });
});

//this is a post endpoint for the request to backend api to startAPI prompt.
app.post('/api', (req, res) => {
  //testing scripts
  console.log(req);
  res.send('Posted ' + JSON.stringify(req))

});
app.listen(app.get("port"), function () {
  console.log("Node app is running at localhost:" + app.get("port"));
});
