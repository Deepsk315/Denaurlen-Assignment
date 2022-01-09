const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

const errorMiddleware = require("./middlewares/error.js");

app.use(express.json());
app.use(cookieParser());

//Route imports
const user = require("./routes/userRoutes.js");

app.use("/api/v1", user);

//Middleware for error
app.use(errorMiddleware);

module.exports = app;
