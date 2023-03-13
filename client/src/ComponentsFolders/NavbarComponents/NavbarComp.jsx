import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavbarComp() {
  let navigate = useNavigate();

  const navigationFun = () => {
    setTimeout(() => {
      navigate("/searchComp");
    }, "1000");
  };

  return (
    <div className="flex justify-between items-center p-4 z-[100] w-full absolute">
      <h1 className="text-red-600 text-4xl font bold cursor-pointer">
        AtlasNET
      </h1>
      <div>
        <button
          className="text-white bg-red-600 px-6 py-2 rounded curser-pointer"
          onClick={() => navigationFun()}
        >
          Search
        </button>
      </div>
    </div>
  );
}
