import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";


export default function LoadingPage() {
    let navigate = useNavigate();
    useEffect(() =>{
        setTimeout(() => {
            navigate("homePage")
          }, "5000")
    },[])
  return (
    <div>LoadingPage</div>
  )
}
