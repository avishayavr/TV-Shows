const showDAL = require("../DAL/showsDAL");
const showModel = require("../models/showsModel");

// get all data with post

// get data with dal
exports.getAllData = async () => {
  const showsModel = await showModel.find({});
  if (showsModel.length > 0) {
    return showsModel;
  } else {
    try {
      let { data: shows } = await showDAL.getShows();
      shows = shows.map((show) => {
        return {
          name: show.name,
          genres: show.genres,
          url: show.url,
          premiered: show.premiered,
          ended: show.ended,
          status:show.status,
          imageMedium:show.image.medium,
          imageOriginal:show.image.original,
          rating:show.rating.average,
          summary:show.summary
        };
      });

      shows.forEach(async (show) => {
        const eachShow = new showModel(show);
        await eachShow.save();
      });

      return shows;
    } catch (error) {
      throw error;
    }
  }
};

// get show by id
exports.getDataById = async (id) => {
  console.log(id);
  return await showModel.findById(id);
};

  // create show
exports.createShow = async (obj) => {
  try {
  const newShow = new showModel({
          // _id:obj._id,
          name: obj.name,
          genres: obj.genres,
          url: obj.url,
          premiered: obj.premiered,
          ended: obj.ended,
          status:obj.status,
          imageMedium:obj.image.medium,
          imageOriginal:obj.image.original,
          rating:obj.rating.average,
          summary:obj.summary
  });

    console.log(obj);
    await newShow.save()
    return "created";
  } catch (error) {
    return "an error happened, panic now!!";
  }
};

// update a show
exports. updateShow = async (id, obj) =>{
  try {
      await showModel.findByIdAndUpdate(id, obj)
      return "updated"
  } catch (error) {
      throw "Error happened, please don't panic"

  }
}

// delete a show
exports.deleteShow = async (id) => {
  try {
      await showModel.findByIdAndDelete(id);
      return "deleted"
  } catch (error) {
      throw "error happened"
  }
}
