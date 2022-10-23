import React from "react";
import { useState, useEffect } from "react";
import { ratingFilter } from "../Genres";
import "bootstrap/dist/css/bootstrap.min.css"

export default function Header() {
  const [data, setData] = useState([]);

  const getDataFun =  () => {
    const topShows = ratingFilter();
    setData(topShows);
    console.log(topShows);
  };
  useEffect(() => {
    getDataFun();
  }, []);
  return (
    <div>
   <div id="carouselExampleCaptions" className="carousel slide" data-mdb-ride="carousel">
   <div className="carousel-inner">
    {data.map((show, i) =>{
      return(
        <div className="carousel-item" key={i}>
        <img src={show.imageOriginal} className="d-block w-100" alt="Camera"/>
        <div className="carousel-caption d-none d-md-block">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      )
    })}
   </div>
   </div>

    </div>
  );
}
// style={{height:"60vh", backgroundPosition:"center", backgroundRepeat:'no-repeat', backgroundAttachment:"fixed"}}