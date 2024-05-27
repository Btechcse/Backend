const express = require("express");
const path = require("path");
const app = express()
const mongoose = require('mongoose');
require("./db/conn");

const port = process.env.PORT || 3004;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/myDatabase?directConnection=true");

// Create a simple schema and model
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});
const User = mongoose.model("User", UserSchema);

// Add a new user
const newUser = new User({
  name: "Kumari Anjali",
  email: "gautamanjal818@gmail.com",
  password: 'Password123'
});
newUser.save() 
.then(() => {
  console.log("User saved!");
  })
  .catch((err) => {
    console.error(err);
    });
  
const static_path = path.join(__dirname, 'public');
app.use(express.static(static_path));

//start the server
app.get("/",(req, res) =>{
    res.send("hello from the family");
});

app.listen(port, () => {
    console.log('server is running on port ${port}');
});

