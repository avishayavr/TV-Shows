let shows = [];
export const getData = async () => {
  // const { data: shows } = await axios.get("http://localhost:8000/api/shows");
  let response = await fetch("http://localhost:8000/api/shows");
  let data = await response.json();
  shows = data
  return shows;
};

// export default getData;

// filter for action shows
export const actionFilter = (genre) =>{
  const newData = [...shows];
    let actionShows = newData.filter((show,i) => {
      if(show.genres[0]  === genre || show.genres[1]  === genre || show.genres[2]  === genre){
        return show;
      }
    } );
    return actionShows;
  }

  // show.genres[0]  === genre
