import React from "react";
import "./More.css";

export default function MoreButton() {
  return (
    <div className="bakimg">
      <div className="outer2">
        <div className="m-head">
          <h1>All Requests</h1>
        </div>
        <div>
          <hr></hr>
        </div>
        <div className="flexing">
          <div className=" wid1">Blood group :</div>
          <div className=" wid1">Units :</div>
          <div className=" wid1">Date of request :</div>
        </div>
        <div>
          <hr></hr>
        </div>
        <div className="flexing marg1">
          <div className="m-user">
            <h2>Username_1</h2>
          </div>
          <div className="m-user">
            <h2>Username_2</h2>
          </div>
        </div>

        <div className="flexing marg1">
          <div className="m-user">
            <h2>Username_1</h2>
          </div>
          <div className="m-user">
            <h2>Username_2</h2>
          </div>
        </div>

        <div className="flexing marg1">
          <div className="m-user">
            <h2>Username_1</h2>
          </div>
          <div className="m-user">
            <h2>Username_2</h2>
          </div>
        </div>

        <div className="flexing marg1">
          <div className="m-user">
            <h2>Username_1</h2>
          </div>
          <div className="m-user">
            <h2>Username_2</h2>
          </div>
        </div>

        <div className="flexing bt-width">
            <div className="m-button1"><button>Solved</button></div>
            <div className="m-button2"><button>Edit</button></div>
        </div>


      </div>
    </div>
  );
}
