const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://avishayav:mymdbaccount99@cluster0.mlivppk.mongodb.net/showsDB?retryWrites=true&w=majority", () => {
    console.log("Connected to Database")
})
// mongoose.connect("mongodb://localhost:27017/ShowsDB", () => {
//     console.log("Connected to Database")
// })

// {
//     "name": "server",
//     "version": "1.0.0",
//     "description": "",
//     "main": "main.js",
//     "scripts": {
//       "start": "nodemon main"
//     },
//     "keywords": [],
//     "author": "",
//     "license": "ISC",
//     "dependencies": {
//       "axios": "^1.1.3",
//       "cors": "^2.8.5",
//       "express": "^4.18.2",
//       "jsonfile": "^6.1.0",
//       "mongoose": "^6.6.5",
//       "nodemon": "^2.0.20"
//     }
//   }
  
  