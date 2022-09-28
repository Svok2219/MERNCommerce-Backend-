
// app.js
require("dotenv").config();
// console.log(process.env.DB_PASS);
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use('*',cors())
app.get("/", (req, res) => res.send("Hello world! once again"));
// var bodyParser = require('body-parser');
//app.use(express.bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const ProductsRouter = require("./Router/ProductsRouter");
const CategoryRouter = require("./Router/CategoryRouter");
const UserRouter = require("./Router/UserRouter");
const GalleryRouter = require("./Router/GalleryRouter");

app.use("/Products", ProductsRouter);
app.use("/User", UserRouter);
app.use("/Category", CategoryRouter);
app.use("/Gallery", GalleryRouter);


mongoose.connect(
    `mongodb+srv://MERNdeveloper:${process.env.DB_PASS}@clustermerncom.ukkrnja.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "MERNcomBase"
    }
  )
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch(err => {
    console.log(err);
  });

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
