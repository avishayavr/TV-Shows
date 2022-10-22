import React from "react";
import { useState, useEffect } from "react";
import TemplateComp from "./TemplateComp";
import { getData, showsFilter } from "../Genres";

export default function MainPage() {
  const [action, setAction] = useState([]);
  

  const getDataF = async () => {
    // const { data: shows } = await axios.get("http://localhost:8000/api/shows");
    // const newData = [...shows];
    await getData()
    const shows =  showsFilter("Action")
    setAction(shows);
    // const newDataDrama = [...shows];
    // let actionShows = newData.filter((show) => show.genres[0] == "Action");
    // setAction(actionShows);
    // console.log(shows);
  };

  useEffect(() => {
    getDataF();
  }, []);
  return (
    <div>
      <h1>MainPage</h1>
      <br />
      <TemplateComp data={showsFilter("Action")} />
      <TemplateComp data={showsFilter("Drama")} />
      <TemplateComp data={showsFilter("Comedy")} />
      <TemplateComp data={showsFilter("Fantasy")} />
      <TemplateComp data={showsFilter("Horror")} />
      <TemplateComp data={showsFilter("History")} />
    </div>
  );
}
