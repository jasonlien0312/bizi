const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("users.db");
db.serialize(() => {
  db.run("CREATE TABLE users (userName TEXT , userPassword TEXT)");
  db.run("INSERT INTO users VALUES ('Jason', '12341')");
  db.run("INSERT INTO users VALUES ('Michael', 'password')");
  db.run("INSERT INTO users VALUES ('Lenox', 'giff')");

  db.run(
    "CREATE TABLE events (eventUser TEXT, eventName TEXT, eventDescription TEXT, eventDate TEXT, eventTime TEXT, FOREIGN KEY(eventUser) REFERENCES users(userName))"
  );
  db.run(
    "INSERT INTO events VALUES ('Jason','CSCE 431', 'software engr class', '03/12/2019','08:00a')"
  );
  db.run(
    "INSERT INTO events VALUES ('Michael','CSCE 222', 'discrete math', '03/13/2019','09:00a')"
  );
  db.run(
    "INSERT INTO events VALUES ('Lenox','CSCE 101', 'data structure and algorithm', '06/12/2019','10:00a')"
  );
  db.each("SELECT eventUser, eventName FROM events", (err, row) => {
    console.log(row.eventUser, row.eventName);
  });
});
db.close();