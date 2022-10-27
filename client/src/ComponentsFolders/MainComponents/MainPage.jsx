import React from "react";
import { useState, useEffect } from "react";
import TemplateComp from "./TemplateComp";
import { getData } from "../Genres";

export default function MainPage() {
  const [shows, setShows] = useState([]);

  // function to get data and activate the show filter
  const getDataF = async () => {
    const data = await getData();
    // const shows =  showsFilter("")
    // setAction(shows);
    setShows(data);
  };

  // function to filter the shows by genre
  const showsFilter = (genre) => {
    const newData = [...shows];
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
    <div className="flex flex-col items-center">
      {/* render the carousel by genres */}
      <TemplateComp data={showsFilter("Action")} text={"Action"} />
      <TemplateComp data={showsFilter("Drama")} text={"Drama"} />
      <TemplateComp data={showsFilter("Comedy")} text={"Comedy"} />
      <TemplateComp data={showsFilter("Fantasy")} text={"Fantasy"} />
      <TemplateComp data={showsFilter("Horror")} text={"Horror"} />
      <TemplateComp data={showsFilter("History")} text={"History"} />
      <TemplateComp data={showsFilter("Anime")} text={"Anime"} />
    </div>
  );
}
