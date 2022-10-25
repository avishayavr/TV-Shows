import React from "react";
import { FaCheckCircle } from "react-icons/fa";


export default function ModalComp({ data, indexId }) {
  // console.log(name);
  return (
    <div>
      <input type="checkbox" id={indexId} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
      <div style={{backgroundColor:" #141414", border:"1px solid rgb(181, 8, 17)"}}  className="modal-box">
        {/* top of the modal */}
       <div className="top flex justify-evenly">
        <div className="pic">
        <img src={data.imageMedium}/>
        </div>
        <div className="right">
        <h3 className="font-bold text-lg flex items-center">{data.name} <FaCheckCircle/></h3><br/>
        <a href={data.url}>to the official site</a>
        </div>
       </div>
       {/*end of top of the modal */}
       {/* <div className="description">
        <p>{data.summary}</p>
       </div> */}
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

//   <input type="checkbox" id={indexId} className="modal-toggle" />
//   <div className="modal modal-bottom sm:modal-middle">
    // <div style={{backgroundColor:" #141414"}}  className="modal-box">
    //     {/* top of the modal */}
    //    <div className="top flex justify-evenly">
    //     <div className="pic">
    //     <img src={data.imageMedium}/>
    //     </div>
    //     <div className="right">
    //     <h3 className="font-bold text-lg">{data.name}</h3>
    //     <a href={data.url}>to the official site</a>
    //     </div>
    //    </div>
    //    {/*end of top of the modal */}
    //    {/* <div className="description">
    //     <p>{data.summary}</p>
    //    </div> */}
    //   <div className="modal-action">
// <label style={{backgroundColor: "rgb(181, 8, 17)"}} htmlFor={indexId} className="btn">
//   Close
// </label>
//       </div>
//     </div>
//   </div>
