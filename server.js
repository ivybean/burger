const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;

const app = express();

// Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Serve static content for the app from "public" directory
app.use(express.static('public'))

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them
const routes = require("./controllers/burgers_controllers.js");

app.use(routes);


// Start our server so that it can begin listening to client requests.
app.listen(PORT , () => {console.log(`Listening on port ${PORT}`)});
