import React from "react";
import { useState, useEffect } from "react";
import { ratingFilter } from "../Genres";

export default function Header() {
  const [data, setData] = useState([]);

  const getDataFun = async () => {
    const topShows = await  ratingFilter();
    setData(topShows);
    console.log(topShows);
  };
  useEffect(() => {
    getDataFun();
  }, []);
  return (
    <div>
      <div className="carousel w-full">
        {/* <div id="slide1" className="carousel-item relative w-full">
      <img src="https://placeimg.com/800/200/arch" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
      <img src="https://placeimg.com/800/200/arch" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div>    */}
        {data.map((show, i) => {
          return (
            <div id="slide1" className="carousel-item relative w-full" key={i}>
              <img src="https://placeimg.com/800/200/arch" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                </a>
                <a href="#slide2" className="btn btn-circle">
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
