import React, { useEffect, useState } from "react";
import { MyUpdate } from "../../functions/user";
import "./Update.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FaWindows } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  text: {
    marginTop: "1%",
    width: "100%",
  },
  buttonDiv: {
    textAlign: "center",
    marginTop: "2%",
  },
  button: {
    color: "white",
    backgroundColor: "#ea4848",
    width: "20%",
    paddingTop: "1%",
    // fontSize:"15px"
  },
}));

export default function UserUpdate(props) {
  let userdetails = JSON.parse(localStorage.getItem("User_details"));
  const [username, setUname] = useState(userdetails.username);
  const [email, setUEmail] = useState(userdetails.email);
  const [phoneNo, setUNo] = useState(userdetails.phoneNo);

  

  const handleEmail = (e) => {
    setUEmail(e.target.value);
  };
  const handleNo = (e) => {
    setUNo(e.target.value);
  };

  const handleUpdate = async () => {
    const data = {
      email,
      phoneNo,
      username,
    };
    let result;
    try {
      result = await MyUpdate(data);
      const udata = JSON.parse(localStorage.getItem('User_details'));
      udata.email = data.email;
      udata.phoneNo = data.phoneNo;
      localStorage.setItem("User_details", JSON.stringify(udata));
      window.location.href = "/profile";
    } catch (err) {
      alert("Cannot update at the moment");
    }
  };

  const classes = useStyles();
  const [detls, setDetls] = useState({});

  let udetails = JSON.parse(localStorage.getItem("User_details"));

  useEffect(() => {
    setDetls(udetails);
    setUname(userdetails.username);
  }, []);

  return (
    <div className="ba-image">
      <div className="outer">
        <div className="p-head">
          <h1>Details</h1>
        </div>
        <div>
          <hr></hr>
        </div>
        <div className="details-outer">
          <div className="flexing">
            <div className="p-details">
              <h3>Username</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>
            <div className="p1-details">
              <TextField
                id="outlined-basic"
                label={detls.username}
                variant="outlined"
                className={classes.text}
                disabled="true"
              />
            </div>
          </div>

          <div className="flexing">
            <div className="p-details">
              <h3>Email id</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>

            <div className="p1-details">
              <TextField
                id="outlined-basic"
                label={detls.email}
                variant="outlined"
                className={classes.text}
                onChange={handleEmail}
              />
            </div>
          </div>

          <div className="flexing">
            <div className="p-details">
              <h3>Contact Number</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>
            <div className="p1-details">
              <TextField
                id="outlined-basic"
                label={detls.phoneNo}
                variant="outlined"
                className={classes.text}
                onChange={handleNo}
              />
            </div>
          </div>

          <div className="flexing">
            <div className="p-details">
              <h3>Gender</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>

            <div className="p1-details">
              <TextField
                id="outlined-basic"
                label={detls.gender}
                variant="outlined"
                disabled="true"
                className={classes.text}
              />
            </div>
          </div>

          <div className="flexing">
            <div className="p-details">
              <h3>Blood group</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>

            <div className="p1-details">
              <TextField
                id="outlined-basic"
                label={detls.blood}
                variant="outlined"
                disabled="true"
                className={classes.text}
              />
            </div>
          </div>

          <div className="flexing">
            <div className="p-details">
              <h3>Date of birth</h3>
            </div>
            <div>
              <h2>:</h2>
            </div>

            <div className="p1-details">
              <TextField
                id="outlined-basic"
                label="Date of birth"
                variant="outlined"
                disabled="true"
                className={classes.text}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.buttonDiv}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={handleUpdate}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
