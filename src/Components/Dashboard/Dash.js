import React from "react";
import "./Dash.css";
import Button from '@material-ui/core/Button';
export default function DashB() {
  return (
    <div className="dash-bg-img">
      <div><hr></hr></div>
      <div className="dash-button1">
        <a href="/donate"><button>Donate</button></a>
      </div>
      <div className="dash-button2">
        <a href="/request"><button onClick="">Request</button></a>
      </div>
      <div><hr></hr></div>
    </div>
  );
}
