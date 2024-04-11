//get the function name from the db.js file which is exported
const connectToMongo = require("./db");
//run the function call
connectToMongo();
//install the express and load the nodejs application
const express = require("express");
const app = express();
const port = 5000;
var cors = require('cors')
const path=require("path")

app.use(cors())
app.use(express.json()); 
//middle ware to use json
//Available routes

// app.use("/api/auth", require("./routes/auth"));
app.use("/api/auth", require("./routes/demo"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/todo", require("./routes/todotask"));

app.use(express.static(path.join(__dirname, './mernapp/build')))

app.get('*', (req, res) =>
{
  res.sendFile(path.join(__dirname,"./mernapp/build/index.html"))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
