import React from "react";
import "./Login.css";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
export default function Log() {
  return (
    <div className="bgpic">
      <h1 style={{ textAlign: "center" }} className="head-login">Login</h1>
      <div className="out">
        <div className='inside'>
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
              <FaLock />{" "}
            </span>
            <input placeholder="Password"></input>
          </h3>
          <p>Forgot password?</p>
        </div>
      </div>
      <div className="signin-button">
        <button>Sign in</button>
      </div>
    </div>
  );
}
