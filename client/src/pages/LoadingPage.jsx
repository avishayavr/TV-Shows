import React from "react";
import LoadingTemplate from "../ComponentsFolders/AnimationComp/LoadingTemplate";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoadingPage() {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("homePage");
    }, "4000");
  }, []);

  return (
    <div style={{ background: " #141414", height: "100vh" }}>
      <LoadingTemplate />
    </div>
  );
}
