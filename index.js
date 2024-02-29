const express = require("express");
const app = express();
const port = 3000;
const route = require('./routes/client/index.route.js');

//cài đặt pug
app.set('views', './views');
app.set('view engine', 'pug');

//Router
route(app);


app.listen(port, (req, res) => {
  console.log(`listening on port ${port}`);
});
  