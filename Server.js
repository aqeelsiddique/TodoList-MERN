
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes/ToDoRoute");
const app = express();
const bodyParser = require('body-parser');
//////////////handling uncaught expection error\//
const cookieParser = require('cookie-parser');
// Middleware to parse cookies
app.use(cookieParser());// app.use(cors());
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');
app.use(express.json());
app.use(cors());

//////////////handling uncaught expection error\//
// Middleware to parse cookies
app.use(cookieParser());
process.on("uncaughtExpection" , (err) => {
   console.log(`Error: ${err.message}`);
   console.log(`Shutting down the server due to uncaught expection`);
   process.exit(1)
})
//config
dotenv.config({path:"./config/config.env"});
// Connecting to database
// port=6780
connectDatabase()
 app.listen(process.env.PORT,()=>{
 

    console.log(`Server is working on http://localhost:${process.env.PORT}`)
 })
//unhandled promise rejection
// Handling unhandled promise rejections globally
process.on("unhandledRejection", (err) => {
   console.log(`Error: ${err.message}`);
   console.log(`Shutting down the server due to unhandled promise rejection`);
   process.exit(1);
});
// Routes
app.use(routes);