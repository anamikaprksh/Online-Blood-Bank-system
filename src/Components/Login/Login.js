import React from "react";
import "./Login.css";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import {Login} from '../../functions/user'


export default function Log() {
  const loginFunction=async ()=>{
   const data={
      username:"nithin021",
      password:"123456"
    }
    let result
    try{
       result=await Login(data);
    }
    catch(err){
      console.log(err)
    }
  }
  loginFunction()
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
