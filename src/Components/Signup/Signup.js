import React, { useState } from "react";
import "./Signup.css";
import { FaBeer } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Signup } from "../../functions/user";

export default function Siup(props) {
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState(null);
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [blood, setBlood] = useState("");
  const [lastDate, setLastDate] = useState("");

  const handleSubmit = async () => {
    let result;
    const data = {
      username,
      password,
      dob,
      email,
      gender,
      phoneNo,
      blood,
      lastDate,
    };
    console.log(data);
    // try{
    //   result = await Signup(data)
    //   localStorage.setItem('AUTH',true)
    //   localStorage.setItem('User_details',JSON.stringify(result))
    //   props.history.push('/dashboard')

    // }
    // catch(err){
    //   console.log(err)
    //   const {err:{code}}=err
    //   if (code ==='23505'){
    //     alert('The username already exist')
    //   }
    //   else{
    //     alert('Something went wrong')
    //   }
    // }
  };

  return (
    <div className="bgpic">
      <h1 style={{ textAlign: "center" }}>Sign-Up</h1>
      <div className="out">
        <div>
          <h3 className="big">
            <span>
              {" "}
              <FaUserAlt />{" "}
            </span>
            <input
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </h3>
          <h3 className="big">
            <span>
              {" "}
              <FaPhoneAlt />{" "}
            </span>
            <input
              placeholder="Phone No."
              onChange={(e) => setPhoneNo(e.target.value)}
            ></input>
          </h3>
          <h3 className="big">
            <span>
              {" "}
              <FaBeer />{" "}
            </span>
            <div className='date'>
              <DatePicker placeholderText="DOB" />
            </div>
          </h3>
          <h3 className="big">
            <span>
              {" "}
              <FaBeer />{" "}
            </span>
            <input
              placeholder="gender"
              onChange={(e) => setGender(e.target.value)}
            ></input>
          </h3>
        </div>
        <div>
          <h3 className="big">
            <span>
              {" "}
              <FaLock />{" "}
            </span>
            <input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </h3>

          <h3 className="big">
            <span>
              {" "}
              <FaBeer />{" "}
            </span>
            <input
              placeholder="EmailId"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </h3>
          <h3 className="big">
            <span>
              {" "}
              <FaBeer />{" "}
            </span>
            <input
              placeholder="Blood Group"
              onChange={(e) => setBlood(e.target.value)}
            ></input>
          </h3>
          <h3 className="big">
            <span>
              {" "}
              <FaBeer />{" "}
            </span>
            <input
              placeholder="last donation date"
              onChange={(e) => setLastDate(e.target.value)}
            ></input>
          </h3>
        </div>
      </div>
      <div className="sign-button">
        <button onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
}
