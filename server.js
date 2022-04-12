const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const router = require("./controllers");

const app = express();
const hbs = exphbs.create();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(router);

app.listen(PORT, () => console.log("Now listening"));
