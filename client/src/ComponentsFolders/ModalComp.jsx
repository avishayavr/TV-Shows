import React from "react";


export default function ModalComp({name,indexId}) {
console.log(name);
  return (
    <div>
      <input type="checkbox" id={indexId} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name}</h3>
          <div className="modal-action">
            <label htmlFor={indexId} className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
