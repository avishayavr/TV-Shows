import axios from "axios";

const getData = async () => {
  const {data} = await axios("https://energetic-rose-panama-hat.cyclic.app/api/shows");
  return data;
};

export {getData}





  

