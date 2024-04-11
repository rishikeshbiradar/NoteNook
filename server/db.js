const mongoose = require("mongoose");

// const mongoURI = "mongodb+srv://sam:qE8bQPKGKPNPDQ7s@users.nvyog12.mongodb.net/todolist?retryWrites=true&w=majority"
const mongoURI="mongodb://localhost:27017/DBMS"

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Database Connected Boss");
  });
};

module.exports = connectToMongo;

