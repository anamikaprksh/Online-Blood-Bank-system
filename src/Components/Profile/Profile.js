import React from "react";
import "./Profile.css";
export default function UserProfile() {
  return (
    <div className="ba-image">
      <div className="outer">
        <div className="p-head">
          <h1>Details</h1>
        </div>
        <div>
          <hr></hr>
        </div>
        <div className="details-outer">
          <div className="flexing">
            <div className="p-details">
              <h3>Username</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>
            <div className="p-details">
              <h4>Username</h4>
            </div>
          </div>

          <div className="flexing">
            <div className="p-details">
              <h3>Name</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>
            <div className="p-details">
              <h4>Name</h4>
            </div>
          </div>

          <div className="flexing">
            <div className="p-details">
              <h3>Email id</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>
            <div className="p-details">
              <h4>Email id</h4>
            </div>
          </div>

          <div className="flexing">
            <div className="p-details">
              <h3>Contact Number</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>
            <div className="p-details">
              <h4>Contact Number</h4>
            </div>
          </div>

          <div className="flexing">
            <div className="p-details">
              <h3>Gender</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>
            <div className="p-details">
              <h4>Gender</h4>
            </div>
          </div>

          <div className="flexing">
            <div className="p-details">
              <h3>Blood group</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>
            <div className="p-details">
              <h4>Blood group</h4>
            </div>
          </div>

          <div className="flexing">
            <div className="p-details">
              <h3>Date of birth</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>
            <div className="p-details">
              <h4>Date of birth</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
