require('dotenv').config();
const mongoose = require('mongoose');

const connection = async () => {

  try {
    mongoose.connect(process.env.MONGO_URI)
    console.log("Mongo is connected");
  } catch (error) {
    console.log(error);
  }
}

connection()