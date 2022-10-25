import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../../style/MainPage.css";
import ModalComp from "../ModalComp";

export default function TemplateComp({ data, text }) {
  const [movieList, setMovieList] = useState([])
  // console.log(data);
  useEffect(() => {
    setMovieList(data)
    console.log(movieList);
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
      {/* <button onClick={() => console.log(movieList)}>click</button> */}

      <div className="carousel carousel-center p-4 space-x-4 rounded-box ">
        {movieList.length > 0 && movieList.map((show, i) => {
          console.log(show);
          return (
            <div className="carousel-item" key={i}>
              <label htmlFor={`my-modal-${show.name}-${i}`} className="w-full">
                <img src={show.imageMedium} className="rounded-box" />
              </label>
              <ModalComp key={i} data={show} indexId={`my-modal-${show.name}-${i}`} />
              {/* <!-- Put this part before </body> tag --> */}
              {/* <input
                  type="checkbox"
                  id="my-modal-6"
                  className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">
                      {show.name}
                    </h3>
                    <div className="modal-action">
                      <label htmlFor="my-modal-6" className="btn">
                        Close
                      </label>
                    </div>
                  </div>
                </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
