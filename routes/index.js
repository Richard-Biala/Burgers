const app = require("express").Router();

const burger = require("../models/burgers");

app.get("/", function (req, res) {

    burger.findAll(function (results) {
        console.log(results);
        res.render("index", { hbobj: results });
    })

})

module.exports = app;