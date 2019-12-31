const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/user/:id", function(req, res) {
  res.send("user " + req.params.id);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
