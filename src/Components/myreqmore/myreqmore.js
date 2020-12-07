import React from "react";
import "./myreqmore.css";
import {MyRequest} from '../../functions/user'
import Loading from "../Animation/Animation";

export default function Mymore() {

    let udetails = JSON.parse(localStorage.getItem("User_details"));

    // const handleApply = async () => {
    //     const data = {
    //       username:udetails.username,
    //     };
    //     let result;
        
    //     try {
    //       setLoad(true);
    //       result = await MyRequest(data);
    //       setLoad(false)
    //       setFresult(result);
    //       console.log(result)
          
    //     } catch (err) {
    //       console.log(err);
    //       alert("error");
    //     }
    //   }

  return (
    <div className="outer2">
      <div className="mreq-head">
        <h1>Details</h1>
      </div>
      <div>
        <hr></hr>
      </div>
      <div className="details-outer">
        <div className="flexing3">
          <div className="myreq-details">
            <h3>Username</h3>
          </div>
          <div>
            <h2>:</h2>
          </div>
          <div className="myreq-details">
            <h4>username</h4>
          </div>
        </div>
        <div className="flexing3">
          <div className="myreq-details">
            <h3>Username</h3>
          </div>
          <div>
            <h2>:</h2>
          </div>
          <div className="myreq-details">
            <h4>username</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
