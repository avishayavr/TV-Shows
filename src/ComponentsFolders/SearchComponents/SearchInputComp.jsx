import React from 'react'

export default function SearchInputComp({handleInput}) {

  return (
    <div>
        <input onChange={(e)=> handleInput(e.target.value)} style={{border: "1px solid rgb(181, 8, 17)"}} placeholder="Search for show" className="input w-full max-w-xs bg-transparent border-none my-5" />
    </div>
  )
}
