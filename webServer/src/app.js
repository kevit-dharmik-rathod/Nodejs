const path = require("path");
const express = require("express");
const hbs = require("hbs");
``;
const app = express();
const publicDirectory = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
app.use(express.static(publicDirectory));
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);
app.set("views", viewPath);
app.get("", (req, res) => {
  res.render("index.hbs", {
    title: "Weather app",
    name: "Dharmik Rathod",
  });
});
app.get("/about", (req, res) => {
  res.render("about.hbs", {
    title: "About me",
    name: "Dharmik Rathod",
  });
});
app.get("/help", (req, res) => {
  res.render("help.hbs", {
    helpText: "Help page",
    name: "Dharmik Rathod",
  });
});
app.get("*", (req, res) => {});
app.listen(3000, () => {
  console.log("Server is listening on 3000");
});
