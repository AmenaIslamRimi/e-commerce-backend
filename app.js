const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routerOrder = require("./routes/order");

//import { notFound, errorHandler, processRequest } from './middlewares'
//import { catchAsync } from './utils'

// import { dbConnect, limiter } from './config'
const { dbConnect, limiter } = require("./config");

//import helmet from 'helmet'
const helmet = require("helmet");

//app config
const app = express();

// express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
app.use(express.json());

// express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays.
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

// Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(helmet());

// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
app.use(
  cors({
    origin: ["*"],
    credentials: true,
  })
);

// Cookie parser is a middleware which parses cookies attached to the client request object.
app.use(cookieParser());

//rate limiter
app.use("/api", limiter);

// test route
app.get("/", (req, res) => {
  res.send("Server is running good... ✨🐱‍🏍🔧🚀⚡🔥");
});

//static files
app.use(express.static("public")); // to serve static files

// routes
app.use("/api/v1/orders", routerOrder);

// add favicon.ico to static files on /public folder /favicon.ico
app.use("/favicon.ico", express.static("public/favicon.ico"));

// db config
dbConnect();

//error handling middleware
// app.use(notFound)
// app.use(errorHandler)
// app.use(processRequest)

//export app
module.exports = app;
