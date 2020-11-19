
import React from "react";
import { elastic as Menu } from "react-burger-menu";
import "./Header1.css";
import { Squash as Hamburger } from "hamburger-react";

export default function SecHeader() {
  return (
    
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
            <a href="/"><div id="b-home">HOME</div></a>
            <a href="/"><div id="b-us">ABOUT US</div></a>
        </div>
        
      </div>
      
    
  );
}
