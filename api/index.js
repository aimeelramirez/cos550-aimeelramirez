
// create express app
const app = require('./app')

// start server and log port its running on
app.listen(app.get("port"), function () {
  console.log("Node app is running at localhost:" + app.get("port"));
});
