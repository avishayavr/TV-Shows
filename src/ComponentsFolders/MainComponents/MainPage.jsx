import React from "react";
import { useState, useEffect } from "react";
import TemplateComp from "./TemplateComp";
import { getData } from "../../utils/Genres";

export default function MainPage() {
  const [shows, setShows] = useState([]);
  const [topShows, setTopShows] = useState([]);

  // function to get data and activate the show filter
  const getDataF = async () => {
    const data = await getData();
    let newData = [...data];
    let newTopShows = newData.filter((show) => show.rating > 8.5);
    // const shows =  showsFilter("")
    // setAction(shows);
    // console.log(topShows);
    setTopShows(newTopShows);
    setShows(data);
  };

  // function to filter the shows by genre
  const showsFilter = (genre) => {
    let newData = [...shows];
    let filterShows = newData.filter((show) => {
      if (
        show.genres[0] === genre ||
        show.genres[1] === genre ||
        show.genres[2] === genre
      ) {
        return show;
      }
    });
    return filterShows;
  };

  useEffect(() => {
    getDataF();
  }, []);
  return (
    <div
     className="flex flex-col items-center"
     >
      {/* render the carousel by genres */}
      <TemplateComp rowID = "1" data={topShows} text={"Top"} />
      <TemplateComp rowID = "2" data={showsFilter("Action")} text={"Action"} />
      <TemplateComp rowID = "3" data={showsFilter("Drama")} text={"Drama"} />
      <TemplateComp rowID = "4" data={showsFilter("Comedy")} text={"Comedy"} />
      <TemplateComp rowID = "5" data={showsFilter("Fantasy")} text={"Fantasy"} />
      <TemplateComp rowID = "6" data={showsFilter("Horror")} text={"Horror"} />
      <TemplateComp rowID = "7" data={showsFilter("History")} text={"History"} />
      <TemplateComp rowID = "8" data={showsFilter("Anime")} text={"Anime"} />
    </div>
  );
}
