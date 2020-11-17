import React from "react";
import "./MoreMore.css";

export default function MoMo() {
  return (
    <div className="img-back">
      <div className="mm-outer">
        <div className="mm-head">
          <h1>Donor details</h1>
        </div>
        <div>
          <hr></hr>
        </div>
        <div className="uname">
          <h2>Username_1 :</h2>
        </div>
        <div>
          <hr></hr>
        </div>
        <div className="flexing">
          <div className="mm-details">
            <h3>Name</h3>
          </div>

          <h2 className="mm-details-dot">:</h2>

          <div className="mm-details">
            <h4>Name</h4>
          </div>
        </div>

        <div className="flexing">
          <div className="mm-details">
            <h3>Email id</h3>
          </div>

          <h2 className="mm-details-dot">:</h2>

          <div className="mm-details">
            <h4>Email id</h4>
          </div>
        </div>

        <div className="flexing">
          <div className="mm-details">
            <h3>Contact number</h3>
          </div>

          <h2 className="mm-details-dot">:</h2>

          <div className="mm-details">
            <h4>Contact number</h4>
          </div>
        </div>
        <div className="mm-button"><button>back</button></div>
      </div>
      
    </div>
  );
}
