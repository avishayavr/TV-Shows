let shows = [];
export const getData = async () => {
  // const { data: shows } = await axios.get("http://localhost:8000/api/shows");
  let response = await fetch("http://localhost:8000/api/shows");
  let data = await response.json();
  shows = data
  return shows;
};


// filter by genre
export const showsFilter = (genre) =>{
  const newData = [...shows];
    let filterShows = newData.filter((show,i) => {
      if(show.genres[0]  === genre || show.genres[1]  === genre || show.genres[2]  === genre){
        return show;
      }
    } );
    return filterShows;
  }
// filter by rating
export const ratingFilter = (genre) =>{
  const newData = [...shows];
    let topShows = newData.filter((show) => show.rating >= 8.5);
    return topShows;
  }

