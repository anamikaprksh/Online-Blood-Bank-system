import React, { useEffect, useState } from "react";
import { Details } from "../../functions/user";
import "./Profile.css";
export default function UserProfile() {
  const [detls, setDetls] = useState({});

  let udetails = JSON.parse(localStorage.getItem("User_details"));
  
  useEffect(() => {
    setDetls(udetails);
  }, []);
  
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
              <h4>{detls.username}</h4>
            </div>
          </div>

          {/* <div className="flexing">
            <div className="p-details">
              <h3>Name</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>
            <div className="p-details">
              <h4>Name</h4>
            </div>
          </div> */}

          <div className="flexing">
            <div className="p-details">
              <h3>Email id</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>
            <div className="p-details">
              <h4>{detls.email}</h4>
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
              <h4>{detls.phoneNo}</h4>
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
              <h4>{detls.gender}</h4>
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
              <h4>{detls.blood}</h4>
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
