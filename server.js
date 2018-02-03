const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

let app = express();

let arr = '';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,

  user: 'root',
  password: 'Green123',
  database: 'example_db'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(8080, function(){
  console.log('listening on port ' + 8080);
})
