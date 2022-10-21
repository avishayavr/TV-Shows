import React from 'react'
// import { useState } from 'react'

export default function TemplateComp(props) {

    // const [data, setData] = useState(props.action)

  return (
    <div style={{border:"1px solid white"}}>
        <div className="carousel carousel-center p-4 space-x-4 rounded-box">
            {props.data.map((show, i) =>{
                return(
                    <div className="carousel-item" key={i}>
                    <img src={show.imageMedium} className="rounded-box" />
                  </div>
                )
            })}
        </div>
    </div>
  )
}
