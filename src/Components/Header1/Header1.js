
import React from "react";
import { elastic as Menu } from "react-burger-menu";
import "./Header1.css";
import { Squash as Hamburger } from "hamburger-react";

export default function SecHeader(props) {
  const handleLogout=()=>{
    localStorage.removeItem('AUTH')
    localStorage.removeItem('User_details')
    props.history.push('/')
  }
  return (
    <div>
      <div className="main-head flexing">
        <div className="hamwrap">
          <div className="hamburger">
            <Hamburger></Hamburger>
          </div>
          <Menu>
            <a className="menu-item" href="/dashboard">
              Dashboard
            </a>
            <a className="menu-item" href="/profile">
              Profile
            </a>
            <a className="menu-item" href="/allrequest">
              My Requests
            </a>
            <a className="menu-item" href="/donate">
              My Donations
            </a>
          </Menu>
        </div>
        <div className="flexing hoab">
            <a href="/" onClick={handleLogout}><div id="b-home">LOGOUT</div></a>
            <a href="/"><div id="b-us">ABOUT US</div></a>
        </div>
      </div>
    </div>
  );
}
