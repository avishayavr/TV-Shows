const axios = require('axios');

// get data from WS
exports.getShows = () => {
  return axios.get("https://api.tvmaze.com/shows");
};
