import React from "react";
import "../../style/MainPage.css";
import ModalComp from "../ModalComp";
export default function TemplateComp(props) {
  return (
    <div
      style={{
        border: "1px solid rgb(181, 8, 17)",
        borderRadius: "40px",
        marginTop: "50px",
        width: "100%",
        padding: "10px",
      }}
    >
      <h1>{props.text}</h1>
      <div className="carousel carousel-center p-4 space-x-4 rounded-box ">
        {props.data.map((show, i) => {
          return (
            <>
              <div className="carousel-item" key={i}>
                <label htmlFor="my-modal-6" className="w-full">
                  <img src={show.imageMedium} className="rounded-box" />
                </label>
                {/* <!-- Put this part before </body> tag --> */}
                <input
                  type="checkbox"
                  id="my-modal-6"
                  className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">
                      Congratulations random Internet user!
                    </h3>
                    <p className="py-4">
                      You've been selected for a chance to get one year of
                      subscription to use Wikipedia for free!
                    </p>
                    <div className="modal-action">
                      <label htmlFor="my-modal-6" className="btn">
                        Yay!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
