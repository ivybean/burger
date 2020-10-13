const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Set Handlebars
app.use('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Serve static content for the app from "public" directory
app.use(express.static('public'))

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them
const routes = require("controllers/burgers_controllers");

app.use(routes);


const PORT = process.env.PORT || 8080;
app.listen(PORT , () => {console.log(`Listening on port ${PORT}`)})