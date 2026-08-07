// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server is running at port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection FAILED !!!: ", err);
  });
/*
First Approach 

import express from "express";
const app = express()(
  // function connectDB() {}
  // connectDB();
  // Above is the usual way but a better way is available below
  // It is called Iffy

  async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      app.on("error", (error) => {
        console.log(
          "Application not able to talk to database due to error: ",
          error
        );
        throw error;
      });

      app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
      });
    } catch (error) {
      console.error("ERROR: ", error);
      throw err;
    }
  }
)();
*/
