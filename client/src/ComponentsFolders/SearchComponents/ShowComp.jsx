import React from "react";

export default function ShowComp(props) {
  return (
    <div>
      <div
        style={{ border: "1px solid rgb(181, 8, 17)" }}
        className="card mt-10 w-96 shadow-xl "
      >
        <figure className="px-10 pt-10">
          <img
            src={props.data.imageMedium}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{props.data.name}</h2>
          {/* <a href={props.data.url} className="flex justify-start">Link to more info</a> */}
          <div className="card-actions">
            <button
              style={{ background: "rgb(181, 8, 17)" }}
              className="btn border-none btn-primary"
            >
              {" "}
              <a href={props.data.url} className="flex justify-start">
                Link to more info
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
