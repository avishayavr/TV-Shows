import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Markup } from "interweave";

export default function ModalComp({ data, indexId }) {
 

  // console.log(name);
  return (
    <div>
      <input type="checkbox" id={indexId} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div
          style={{
            backgroundColor: " #141414",
            border: "1px solid rgb(181, 8, 17)",
          }}
          className="modal-box"
        >
          {/* top of the modal */}
          <div className="top flex justify-evenly">
            <div className="pic">
              <img src={data.imageMedium} />
            </div>
            <div className="right">
              <h3 className="font-bold text-lg flex items-center">
                {data.name} <FaCheckCircle style={{ marginLeft: "5px" }} />
              </h3>
              <a href={data.url} className="flex justify-start">
                Link to more info
              </a>
            </div>
          </div>
          {/*end of top of the modal */}
          {/* div that display the description in the modal */}
            <div className="description" >
            <Markup content={data.summary} />
             </div>
             {/* div for a close btn */}
            <div className="modal-action">
              <label
                style={{ backgroundColor: "rgb(181, 8, 17)" }}
                htmlFor={indexId}
                className="btn"
              >
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
  );
}
