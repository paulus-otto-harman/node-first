const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");

const app = express();
const port = 3000;
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
