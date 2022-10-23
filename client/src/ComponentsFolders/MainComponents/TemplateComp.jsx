import React from 'react'
import "../../style/MainPage.css"
import ModalComp from '../ModalComp'
export default function TemplateComp(props) {

  return (
    <div onClick={() => <ModalComp modal={true}/>} style={{border:"1px solid rgb(181, 8, 17)" , borderRadius:"40px", marginTop:"50px", width:"95%", padding:"10px"}}>
      <h1>{props.text}</h1>
        <div className="carousel carousel-center p-4 space-x-4 rounded-box ">
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
