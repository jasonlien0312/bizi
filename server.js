const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("users.db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/express", (req, res) => {
  res.send({ express: "YES EXPRESS!" });
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.post("/users", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/:userName", (req, res) => {
  console.log(req.params.userName);
  res.send(req.params.userName);
});

//listener
const port = 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
