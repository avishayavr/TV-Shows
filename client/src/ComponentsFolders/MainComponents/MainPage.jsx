import React from "react";
import { useState, useEffect } from "react";
import TemplateComp from "./TemplateComp";
import { getData, showsFilter } from "../Genres";

export default function MainPage() {
  const [action, setAction] = useState([]);
  

  const getDataF = async () => {
    await getData()
    const shows =  showsFilter("Action")
    setAction(shows);
  };

  useEffect(() => {
    getDataF();
  }, []);
  return (
    <div className="flex flex-col items-center">
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
