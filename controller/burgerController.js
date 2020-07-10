const app = require("express").Router();

//inmport our model specifically for the burger
const burger = require('../models/burgers');


app.get("/api/burgers", function (req, res) {
    burger.findAll(function (results) {
        res.json(results);
    });
});
app.post("/api/burgers", function (req, res) {
    console.log(req.body);
    burger.createOne(req.body, function (results) {
        res.json(results);
    })
});
app.put("/api/burgers", function (req, res) {

    // const id = { id: req.body.id };
    // const condition = { devoured: req.body.devoured };
    console.log(req.body);
    burger.updateOne(req.body, function (results) {
        res.json(results);
    })
});




module.exports = app;