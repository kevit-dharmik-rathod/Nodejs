const path = require("path");
const express = require("express");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const hbs = require("hbs");
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
    title: "Help",
    helpText: "Help page",
    name: "Dharmik Rathod",
  });
});
app.get("/Weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }
  geocode(req.query.address, (error, { latitude, longitude, place } = {}) => {
    if (error) {
      return res.send({
        error,
      });
    }
    console.log("latitude is ", latitude);
    console.log("longitude is", longitude);
    console.log("place is ", place);
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }
      res.send({
        forecast: forecastData,
        place,
        address: req.query.address,
      });
    });
  });
});
app.get("/help/*", (req, res) => {
  res.send("Help article not available");
});
app.get("*", (req, res) => {
  res.render("404.hbs", {
    title: "404",
    name: "Dharmik Rathod",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is listening on 3000");
});
