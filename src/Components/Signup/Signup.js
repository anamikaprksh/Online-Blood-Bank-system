import React from "react";
import "./Signup.css";
import { FaBeer } from "react-icons/fa";
import  {FaUserAlt} from "react-icons/fa";
import {FaLock} from "react-icons/fa";
import {FaPhoneAlt} from "react-icons/fa";
import {FaUserFriends} from "react-icons/fa"
export default function Siup() {
  return (
    <div className="bgpic">
        <h1 style={{textAlign:"center"}}>
            Sign-Up
        </h1>
      <div className="out">
        <div>
         
          <h3 className="big">
            <span>
              {" "}
              <FaUserAlt />{" "}
            </span>
            <input placeholder="Username"></input>
          </h3>
        
          <h3 className="big">
            <span>
              {" "}
              <FaUserFriends />{" "}
            </span>
            <input placeholder="First Name"></input>
          </h3>
          <h3 className="big">
            <span>
              {" "}
              <FaPhoneAlt />{" "}
            </span>
            <input placeholder="Phone No."></input>
          </h3>
          <h3 className="big">
            <span>
              {" "}
              <FaBeer />{" "}
            </span>
            <input placeholder="Date of Birth"></input>
          </h3>
        </div>
        <div>
          <h3 className="big">
            <span>
              {" "}
              <FaLock />{" "}
            </span>
            <input placeholder="Password"></input>
          </h3>
          <h3 className="big">
            <span>
              {" "}
              <FaUserFriends />{" "}
            </span>
            <input placeholder="Last Name"></input>
          </h3>
          <h3 className="big">
            <span>
              {" "}
              <FaBeer />{" "}
            </span>
            <input placeholder="EmailId"></input>
          </h3>
          <h3 className="big">
            <span>
              {" "}
              <FaBeer />{" "}
            </span>
            <input placeholder="Blood Group"></input>
          </h3>
        </div>
      </div>
      <div className="sign-button">
          <button>Register</button>
        </div>
    </div>
  );
}
