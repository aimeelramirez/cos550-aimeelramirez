const router = require('express').Router();
const chatGpt = require('./chatgpt');

// defines the first routes
router.get("/", function (req, res) {
  let intro = `<h1>cos550-aimeelramirez-api</h1>
    <p>api route</p>`;
  res.send(intro)
});

//this is a post endpoint for the request to backend api to chatGpt prompt.
router.post('/', (req, res) => {
  
  //testing scripts
  chatGpt(req.body.prompt).then((data) => {
    console.log(data)
    res.send(data);
  });

});
module.exports = router;
