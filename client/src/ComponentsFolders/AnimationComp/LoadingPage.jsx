import React from "react";
import LoadingTemplate from "./LoadingTemplate";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoadingPage() {
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("homePage");
    }, "3000");
  }, []);
  return (
    
     <div style={{background:" #141414",height:"100vh"}} >
      <LoadingTemplate/>
     </div>
  );
}