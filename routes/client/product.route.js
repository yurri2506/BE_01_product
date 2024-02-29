const express = require("express");
const router = express.Router();


app.get('/', (req, res) => {
  res.render('client/pages/products/index.pug');
});

module.exports = router;