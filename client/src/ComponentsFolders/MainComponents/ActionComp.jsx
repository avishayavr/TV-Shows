import React from 'react'
import { useState } from 'react'

export default function ActionComp(props) {

    const [data, setData] = useState(props.action)

  return (
    <div>
        <h1>Action</h1> <br/>

        <div className="carousel carousel-center p-4 space-x-4 rounded-box">
            {data.map((show, i) =>{
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
