import React from "react";
import "./Landing.css";
export default function Lands() {
  return (
    <div className="main-ba-img">
      <div className="flexing">
        {/* <div className="image">
          <img src="images/Component 1.svg"></img>
        </div> */}
        {/* <div className="drive-head">
          <h1>BLOOD BANK DRIVE</h1>
        </div> */}
      </div>
      <div className="blood">
        <svg viewBox="0 0">
          <symbol id="s1-text">
            <text text-anchor="middle" x="50%" y="80%">
              BLOOD
            </text>
          </symbol>

          <g class="g-ants">
            <use href="#s1-text" class="text-copy"></use>
            <use href="#s1-text" class="text-copy"></use>
            <use href="#s1-text" class="text-copy"></use>
            <use href="#s1-text" class="text-copy"></use>
            <use href="#s1-text" class="text-copy"></use>
            <use href="#s1-text" class="text-copy"></use>
          </g>
        </svg>
      </div>
      <div className="bank">
        <svg viewBox="0 0">
          <symbol id="s2-text">
            <text text-anchor="middle" x="50%" y="80%">
              BANK
            </text>
          </symbol>

          <g class="g-ants">
            <use href="#s2-text" class="text-copy"></use>
            <use href="#s2-text" class="text-copy"></use>
            <use href="#s2-text" class="text-copy"></use>
            <use href="#s2-text" class="text-copy"></use>
            <use href="#s2-text" class="text-copy"></use>
            <use href="#s2-text" class="text-copy"></use>
          </g>
        </svg>
      </div>
      <div className="drive">
        <svg viewBox="0 0">
          <symbol id="s3-text">
            <text text-anchor="middle" x="50%" y="80%">
              DRIVE
            </text>
          </symbol>

          <g class="g-ants">
            <use href="#s3-text" class="text-copy"></use>
            <use href="#s3-text" class="text-copy"></use>
            <use href="#s3-text" class="text-copy"></use>
            <use href="#s3-text" class="text-copy"></use>
            <use href="#s3-text" class="text-copy"></use>
            <use href="#s3-text" class="text-copy"></use>
            
          </g>
        </svg>
      </div>
      <div className="quote">"GIVE BLOOD, GIFT LIFE"</div>
    </div>
  );
}
