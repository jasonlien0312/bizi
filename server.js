const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/express", (req, res) => {
  res.send({ express: "YES EXPRESS!" });
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//listener
const port = 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
