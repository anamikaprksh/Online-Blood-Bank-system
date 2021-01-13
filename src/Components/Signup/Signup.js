import React, { useState } from "react";
import "./Signup.css";
import {} from "./Signup";
import { FaBeer } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Signup } from "../../functions/user";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  center: {
    marginTop: "3%",
  },
  width: {
    width: "100%",
  },
}));

export default function Siup(props) {
  const classes = useStyles();
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

    try {
      result = await Signup(data);
      localStorage.setItem("AUTH", true);
      localStorage.setItem("User_details", JSON.stringify(result));
      props.history.push("/dashboard");
    } catch (err) {
      console.log(err);
      const {
        err: { code },
      } = err;
      if (code === "23505") {
        alert("The username already exist");
      } else {
        alert("Something went wrong");
      }
    }
  };

  return (
    <div className="bgpic">
      <h1 style={{ textAlign: "center" }}>Sign-Up</h1>
      <div style={{ textAlign: "center" }}>
        <div className="out">
          <div className={classes.width}>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              onChange={(e) => setUsername(e.target.value)}
              className={classes.center}
            />
            <div className={classes.center}>
              <TextField
                id="outlined-basic"
                label="Phone No."
                variant="outlined"
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
            <div className={classes.center}>
              <DatePicker
                placeholderText="DOB"
                className="date"
                selected={dob}
                onChange={(date) => setDob(date)}
                dateFormat="yyyy-MM-dd"
                maxDate={new Date()}
              />
            </div>
            <div className={classes.center}>
              <TextField
                id="outlined-basic"
                label="gender"
                variant="outlined"
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />

            <TextField
              id="outlined-basic"
              label="Email Id"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              id="outlined-basic"
              label="Blood Group"
              variant="outlined"
              onChange={(e) => setBlood(e.target.value)}
            />

            <DatePicker
              placeholderText="last donation date"
              className="date"
              selected={lastDate}
              onChange={(date) => setLastDate(date)}
              dateFormat="yyyy-MM-dd"
              maxDate={new Date()}
            />
          </div>
        </div>
      </div>
      <div className="sign-button">
        <button onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
}
