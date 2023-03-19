import React from "react";
import { useState, useEffect } from "react";
import Show from "./showTemplate";
import ModalComp from "../ModalComp";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function TemplateComp({ data, text, rowID }) {
  const [showList, setShowList] = useState([]);
  useEffect(() => {
    setShowList(data);
  }, [data]);

  return (
    <>
    <h2 className="text-white font-bold md:text-xl p-4">{text}</h2>
    <div
      className=" border border-red-600 w-11/12 rounded-3xl mt-12 p-2 cursor-pointer"
    >

      <div className="carousel carousel-center p-4 space-x-4 rounded-box ">
        {/* iteration to render the shows */}
        {showList.length > 0 &&
          showList.map((show, i) => {
            return (
              <div className="carousel-item" key={i}>
                <label
                  htmlFor={`my-modal-${show.name}-${i}`}
                  className="w-full"
                >
                  <img src={show.imageMedium} className="rounded-box" />
                </label>
                {/* a pop out model for each show */}
                <ModalComp
                  key={i}
                  data={show}
                  indexId={`my-modal-${show.name}-${i}`}
                />
              </div>
            );
          })}
      </div>
    </div>
    </>
    
  );
}
