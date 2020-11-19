import React,{useState} from "react";
import "./Login.css";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import {Login} from '../../functions/user'


export default function Log() {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")

  const handleUsername=(e)=>{
    setUsername(e.target.value)
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
  }
  const handleLogin=async ()=>{
   const data={
      username,
      password
    }
    let result
    try{
       result=await Login(data);
       console.log(data)
       console.log(result)
    }
    catch(err){
      console.log(err)
    }
  }
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
            <input placeholder="Username" onChange={handleUsername}></input>
          </h3>
          <h3 className="big">
            <span>
              {" "}
              <FaLock />{" "}
            </span>
            <input placeholder="Password" onChange={handlePassword} type='password'></input>
          </h3>
          <p>Forgot password?</p>
        </div>
      </div>
      <div className="signin-button">
        <button onClick={handleLogin}>Sign in</button>
      </div>
    </div>
  );
}
