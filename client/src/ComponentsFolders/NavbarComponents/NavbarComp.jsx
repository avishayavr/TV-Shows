import React from 'react'


export default function NavbarComp() {
  return (
    <div className='flex justify-center'>
      <div className="navbar w-5/6 ">
  <div className="navbar-start">
    <a className="btn btn-ghost normal-case text-xl">AtlasNET</a>
  </div>
  <div className="navbar-end">
    <a style={{backgroundColor: "rgb(181, 8, 17)"}}  className="btn">Search</a>
  </div>
</div>
    </div>
  )
}
