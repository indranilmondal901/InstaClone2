const express = require('express');
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");

//middleware
app.use(cors());   // cross origin resource sharing
app.use(fileUpload()); // for uploading file

//import routes
const instarout = require("./routs/rout")

//Router MIddlewares
app.use(express.json());
app.use('/', instarout);

module.exports = app;