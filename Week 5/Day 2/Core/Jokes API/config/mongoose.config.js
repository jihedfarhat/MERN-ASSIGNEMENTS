// 1 Import mongoose here to config db
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/ninjaDB")
  .then(() => {
    console.log("Finally connected to monngoDB");
  })
  .catch((err) => {
    console.log("somthing wronng");
  });
