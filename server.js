const express = require("express");
const app = express();

//routes
// app.get("/", (req, res) => {
//   res.send("hello world lol.");
// });
// app.get("/api/users", (req, res) => {
//   res.send(["jason", "lenox", "michael"]);
// });
app.get("/express_backend", (req, res) => {
  res.send("YES EXPRESS!");
});

//listener
const port = 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
