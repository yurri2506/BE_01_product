const express = require("express");
const router = express.Router();

app.get('/', (req, res) => {
  res.render('client/pages/home/index.pug');
});

module.exports = router;