exports.getData = async () => {
  const response = await fetch("https://energetic-rose-panama-hat.cyclic.app/api/shows");
  return await response.json();
};





  

