import React from "react";
import ShowComp from "./ShowComp";

export default function MainSearchComp({updatedData}) {
  
  const displayMargin = () =>{
    if (updatedData.length < 1) return "135px"
  }

  const displayHeight = () =>{
    if (updatedData.length < 1) return "80vh"
  }


  return (
    <div>
      <div className="flex flex-wrap justify-evenly" style={{margin:displayMargin(), height:displayHeight()}}>
        {updatedData.map((show, i) => (
          <ShowComp data={show} key={i}/>
        ))}
      </div>
      {/* <div style={{display:"none"}}></div> */}
    </div>
  );
}
