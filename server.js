const express = require("express");

const PORT = process.env.PORT || 3000;

const burgerController = require('./controller/burgerController');

const app = express();

//for parsing json in req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//for our controller routes
//or api routes
app.use(burgerController);

app.listen(PORT, function () {
    console.log(`PORT IS LISTENING ON ${PORT}`);
})