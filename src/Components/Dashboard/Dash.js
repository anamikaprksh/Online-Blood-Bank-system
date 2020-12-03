import React from "react";
import "./Dash.css";
import Button from '@material-ui/core/Button';
export default function DashB() {
  return (
    <div className="dash-bg-img">
      <div><hr></hr></div>
      <div className="dash-button1">
        <button>Donate</button>
      </div>
      <div className="dash-button2">
        <button>Request</button>
      </div>
      <div><hr></hr></div>
    </div>
  );
}
