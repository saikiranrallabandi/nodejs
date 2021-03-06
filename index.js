const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

// all my routes here - they 

app.use(function (req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.listen(PORT, function () {
    console.log(`server is starting on port ${PORT}`)
})