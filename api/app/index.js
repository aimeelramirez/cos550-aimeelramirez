/*eslint no-undef: "error"*/
/*eslint-env node*/
// esline-disable-next-line no-unused-vars
// const test = require("node:test");
// const assert = require("node:assert/strict");
const express = require("express");
//parser
const bodyParser = require("body-parser");
//get api
const app = express();
//reads the env
require("dotenv").config();

//get routes
const apiRouter = require("./api");

//set the port number
app.set("port", process.env.PORT || 4000);

// checks if content-type is json & parses into req.body
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  // res.header('Access-Control-Allow-Credentials', true);

  // res.sendStatus(500);
  // if (res.statusCode == 500) {
  //   test("status is 500.", () => {
  //     assert.equal(500, res.statusCode, "error in 500");
  //   });
  // }
  next();
});

// set up to use router
app.use("/api", apiRouter);
//handling middleware

//commenting out for no usages for use will send response
// app.get("/", function (req, res) {
//     let intro = `<h1>cos550-aimeelramirez-api</h1>
//     <p>This is an open endpoint with not authenication needed at the moment</p>`;
//     res.send(intro)
// });
// export the express app
module.exports = app;
