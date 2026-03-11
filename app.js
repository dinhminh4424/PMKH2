var express = require("express");
var expressLayouts = require("express-ejs-layouts");

var app = express();

app.use(express.json());

// view engine
app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");

// layout
app.use(expressLayouts);
app.set("layout", "layouts/layout");

// static
app.use("/static", express.static(__dirname + "/public"));

// controllers
var controller = require(__dirname + "/apps/controllers");
app.use(controller);

app.listen(3000, function () {
  console.log("server is running : http://localhost:3000 ");
});
