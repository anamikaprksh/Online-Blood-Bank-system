import React from "react";
import "./Request.css";

export default function Requests() {
  return (
    <div className="bg-img">
      <div className="req">
        <h1>REQUEST</h1>
      </div>
      <div className="m-input">
        <div>
          <input placeholder="Blood group"></input>
        </div>
        <div>
          <input placeholder="Quantity Unit"></input>
        </div>
        <div>
          <input placeholder="Date of apply(dd/mm/yyy)"></input>
        </div>
        <div>
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
}
