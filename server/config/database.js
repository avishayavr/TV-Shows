const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://avishayav:Atlas99@cluster0.mlivppk.mongodb.net/usersdb?retryWrites=true&w=majority", () => {
//     console.log("Connected to Database")
// })
mongoose.connect("mongodb://localhost:27017/ShowsDB", () => {
    console.log("Connected to Database")
})