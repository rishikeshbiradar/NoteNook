const mongoose = require("mongoose");

// const mongoURI = "mongodb+srv://sam:qE8bQPKGKPNPDQ7s@users.nvyog12.mongodb.net/NoteNook?retryWrites=true&w=majority"
const mongoURI="mongodb://localhost:27017/NoteNook"

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Database Connected Boss");
  });
};

module.exports = connectToMongo;

