const app = require("express").Router();

//inmport our model specifically for the burger
const burger = require('../models/burgers');


app.get("/api/burgers", function (req, res) {
    burger.findAll(function (results) {
        res.json(results);
    })
});
app.post("/api/burgers", function (req, res) {
    burger.createOne(req.body, function (results) {
        res.json(results);
    })
});
app.put("/api/burgers", function (req, res) { });




module.exports = app;