import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import "../../style/MainPage.css";
import ModalComp from "../ModalComp";

export default function TemplateComp({ data, text }) {
  const [movieList, setMovieList] = useState([])
  // console.log(data);
  useEffect(() => {
    setMovieList(data)
    // console.log(movieList);
  }, [data])
  return (
    <div
      style={{
        border: "1px solid rgb(181, 8, 17)",
        borderRadius: "40px",
        marginTop: "50px",
        width: "90%",
        padding: "10px",
      }}
    >
      <h1>{text}</h1>        

      <div className="carousel carousel-center p-4 space-x-4 rounded-box ">
        {movieList.length > 0 && movieList.map((show, i) => {
          // console.log(show);
          return (
            <div className="carousel-item" key={i}>
              <label htmlFor={`my-modal-${show.name}-${i}`} className="w-full">
                <img src={show.imageMedium} className="rounded-box" />
              </label>
              <ModalComp key={i} data={show} indexId={`my-modal-${show.name}-${i}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
