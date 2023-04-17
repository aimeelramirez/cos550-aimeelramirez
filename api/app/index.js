const express = require("express");
//parser
const bodyParser = require('body-parser')
//get api
const app = express();
//reads the env
require('dotenv').config();

//get routes
const apiRouter = require('./api');

//set the port number
app.set("port", process.env.PORT || 4000);

// checks if content-type is json & parses into req.body
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
// set up to use router
app.use('/api', apiRouter);
//handling middleware
// esline-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    error('ERROR FOUND:', err);
    res.sendStatus(500);
})
app.get("/", function (req, res) {
    let intro = `<h1>cos550-aimeelramirez-api</h1>
    <p>This is an open endpoint with not authenication needed at the moment</p>`;
    res.send(intro)
});
// export the express app
module.exports = app;