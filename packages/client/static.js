const express = require("express");
const morgan = require('morgan');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:4000";
const FRONT_BASENAME = process.env.FRONT_BASENAME || "/";
const BACK_BASENAME = process.env.BACK_BASENAME || "/";

app.use(morgan('common'));

app.use(BACK_BASENAME, express.static(path.join(__dirname, "build")));

app.get(BACK_BASENAME, function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get(`*/config`, function (req, res) {
  res.send({
    BACKEND_URL,
    BACK_BASENAME,
    FRONT_BASENAME
  });
});

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
