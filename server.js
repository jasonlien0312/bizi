const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("tables.db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/express", (req, res) => {
  res.send({ express: "YES EXPRESS!" });
});

app.get("/events", (req, res) => {
  user = req.query.name;
  // console.log(user);
  db.all(
    "SELECT eventName, eventDescription  FROM events WHERE eventUser='" +
      user +
      "';",
    (err, events) => {
      res.send(events);
      // console.log(events);
    }
  );
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.get("/user", (req, res) => {
  user = req.query.name;
  res.sendFile(__dirname + "/user.html");
});

//listener
const port = 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
