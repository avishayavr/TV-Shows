const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
        //   _id:String,
          name: String,
          genres: [String],
          url: String,
          premiered: String,
          ended: String,
          status:String,
          imageMedium:String,
          imageOriginal:String,
          rating:Number,
          summary:String
});

const model = mongoose.model("shows", showSchema);
module.exports = model;
