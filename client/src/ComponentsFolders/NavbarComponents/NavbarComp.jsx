import React from 'react'
import { useNavigate } from "react-router-dom";



export default function NavbarComp() {
  let navigate = useNavigate();

  return (
    <div className='flex justify-center'>
      <div className="navbar w-5/6 ">
  <div className="navbar-start">
    <a className="btn btn-ghost normal-case text-xl">AtlasNET</a>
  </div>
  <div className="navbar-end">
    <a style={{backgroundColor: "rgb(181, 8, 17)"}}  className="btn" onClick={()=> navigate("/searchComp")}>Search</a>
  </div>
</div>
    </div>
  )
}
