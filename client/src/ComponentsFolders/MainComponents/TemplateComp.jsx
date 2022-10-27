import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ModalComp from "../ModalComp";

export default function TemplateComp({ data, text }) {
  const [showList, setShowList] = useState([])
  useEffect(() => {
    setShowList(data)
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
        {/* iteration to render the shows */}
        {showList.length > 0 && showList.map((show, i) => {         
           return (
            <div className="carousel-item" key={i}>
              <label htmlFor={`my-modal-${show.name}-${i}`} className="w-full">
                <img src={show.imageMedium} className="rounded-box" />
              </label>
              {/* a pop out model for each show */}
              <ModalComp key={i} data={show} indexId={`my-modal-${show.name}-${i}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
