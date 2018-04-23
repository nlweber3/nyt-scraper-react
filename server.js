require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require('morgan');


const app = express();
const PORT = process.env.PORT || 3000;

//logging route requests
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static("client/build"));


mongoose.Promise = global.Promise;



const db = mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);