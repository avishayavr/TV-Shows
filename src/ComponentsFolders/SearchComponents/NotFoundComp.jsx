import React from 'react'

export default function NotFoundComp({data}) {

    const displayOption = () =>{
     return data.length > 0  ? "none" : "block"  
    }

  return (
    <div style={{height:"80vh",display:displayOption()}} className="flex items-center justify-center">
        <div className="box p-60">
            <h1>Mistake !</h1>
            <p>Show don't exist !</p>
        </div>
    </div>
  )
}
