import React from "react";
// import axios from "axios";
import { useState, useEffect } from "react";
import TemplateComp from "./TemplateComp";
import { getData, actionFilter } from "../Genres";

export default function MainPage() {
  const [action, setAction] = useState([]);
  const [drama, setDrama] = useState([]);

  const getDataF = async () => {
    // const { data: shows } = await axios.get("http://localhost:8000/api/shows");
    // const newData = [...shows];
    await getData()
    const shows =  actionFilter("Action")
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
      <TemplateComp data={actionFilter("Action")} />
      <TemplateComp data={actionFilter("Drama")} />
      <TemplateComp data={actionFilter("Comedy")} />
      <TemplateComp data={actionFilter("Fantasy")} />
      <TemplateComp data={actionFilter("Horror")} />
      <TemplateComp data={actionFilter("History")} />
    </div>
  );
}
