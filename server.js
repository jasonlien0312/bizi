const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("tables.db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));

app.get("/express", (req, res) => {
  res.send({ express: "YES EXPRESS!" });
});
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.get("/user", (req, res) => {
  user = req.query.name;
  res.sendFile(__dirname + "/user.html");
});

//Handling events
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

app.post("/events", (req, res) => {
  // event = {
  //   user: req.body.eventUser,
  //   name: req.body.eventName,
  //   description: req.body.eventDescription,
  //   date: req.body.eventDate,
  //   starts: req.body.eventStarts,
  //   ends: req.body.eventEnds
  // };
  // query =
  //   "INSER INTO events (eventUser, eventName, eventDescription, eventDate, eventStarts, eventEnds) VALUS (?,?,?,?,?,?)";
  // params = [
  //   event.user,
  //   event.name,
  //   event.description,
  //   event.date,
  //   event.starts,
  //   event.ends
  // ];
  // db.run(quert, params, (err, result) => {
  //   if (err) {
  //     res.status(400).json({ error: err.message });
  //     return;
  //   }
  //   res.json({
  //     message: "success",
  //     data: event,
  //     id: this.lastID
  //   });
  // });
});

//listener
const port = 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
