import React,{useState} from "react";
import {Redirect} from 'react-router-dom'
import "./Login.css";
import { FaUserAlt, FaWindows } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {Dashboard} from '../Dashboard/Dash'
import {Login} from '../../functions/user'


const functionToRedirect=(props)=>{
  return <Redirect to='/dashboard' state={true}></Redirect>
}

export default function Log(props) {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [logStatus,setLogStatus]=useState(false)

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
       localStorage.setItem('User_details',JSON.stringify(result))
       localStorage.setItem('AUTH',true)
       window.location.href='/dashboard'
       window.location.reload()

    }
    catch(err){
      alert('Wrong username or password')
    }
  }
  return (
    <div className="bgpic">
      {logStatus && functionToRedirect()}
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
