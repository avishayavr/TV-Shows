import React from "react";
import { useState, useEffect } from "react";
// import { getData } from "../../utils/Genres";



export default function Header() {
  // const [data, setData] = useState([]);

  // const show = data[Math.floor(Math.random() * data.length)]

  // const getDataFun = async () => {
  //   const topShows = await getData();
  //   setData(topShows);
  //   // console.log(topShows);
  // };
  // useEffect(() => {
  //   getDataFun();
  // }, []);

  return (
    <div className="w-full h-[550px] text-white opacity-25">
      <div className="w-full h-full">
        <img className="w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
      </div>
   </div>
  );
}
// style={{height:"60vh", backgroundPosition:"center", backgroundRepeat:'no-repeat', backgroundAttachment:"fixed"}}