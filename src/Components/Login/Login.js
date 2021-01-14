import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Login.css";
import { Login } from "../../functions/user";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  text: {
    width: "100%",
    marginTop: "5%",
  },
}));

const functionToRedirect = (props) => {
  return <Redirect to="/dashboard" state={true}></Redirect>;
};

export default function Log(props) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logStatus, setLogStatus] = useState(false);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async () => {
    const data = {
      username,
      password,
    };
    let result;
    try {
      result = await Login(data);
      localStorage.setItem("User_details", JSON.stringify(result));
      localStorage.setItem("AUTH", true);
      window.location.href = "/dashboard";
      window.location.reload();
    } catch (err) {
      alert("Wrong username or password");
    }
  };
  return (
    <div className="bgpic">
      {logStatus && functionToRedirect()}
      <h1 style={{ textAlign: "center" }} className="head-login">
        Login
      </h1>
      <div className="out">
        <div className="inside">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={handleUsername}
            className={classes.text}
          />

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type='password'
            onChange={handlePassword}
            className={classes.text}
          />

          <p>Forgot password?</p>
        </div>
      </div>
      <div className="signin-button">
        <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
      </div>
    </div>
  );
}
