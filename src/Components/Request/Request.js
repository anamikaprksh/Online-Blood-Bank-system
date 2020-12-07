import React, { useEffect, useState } from "react";
import "./Request.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Request } from "../../functions/user";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import Loading from '../Animation/Animation.js'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(5),
      width: '30ch',
    },
  },
  textfield:{
    width:theme.spacing(50),
    marginTop:theme.spacing(5)

  }
}));


export default function Requests() {
  const classes = useStyles();
  const [blood_group, setBloodgroup] = useState("");
  const [units, setUnits] = useState("");
  const [date_of_request, setDoa] = useState("");
  const [username, setUserId] = useState("");
  // const [detls, setDetls] = useState({});

  let udetails = JSON.parse(localStorage.getItem("User_details"));

  // useEffect(() => {
  //   setDetls(udetails);
  // }, []);
  useEffect(() => {
    setUserId(udetails.username);
  }, []);
  // setUserId(detls.username)
  const handleApply = async () => {
    const data = {
      blood_group,
      units,
      username,
      date_of_request,
    };
    let result;
    console.log(data);
    try {
      result = await Request(data);
      // localStorage.setItem("User_details", JSON.stringify(result));
      // localStorage.setItem("AUTH", true);
      // props.history.push("/dashboard");
      alert('Request Submitted successfully')
    } catch (err) {
      console.log(err);
      alert("error");
    }
  };

  return (
    <div className="bg-img">
      
      <div className="req">
        <h1>REQUEST</h1>
      </div>
      {/* <img src="images/bg_heading.svg"></img> */}
      
      <div className="reqes-input">
        <div>
          <TextField id="outlined-basic" label="Blood Group" onChange={(e)=>setBloodgroup(e.target.value)} variant="outlined" className={classes.textfield}/>
        </div>
        <div>
          <TextField id="outlined-basic" label="Units" onChange={(e)=>setUnits(e.target.value)} variant="outlined" className={classes.textfield}/>
        </div>
        <div className="datepick">
          <DatePicker
            placeholderText="date"
            className="date1"
            selected={date_of_request}
            onChange={(date) => setDoa(date)}
            dateFormat="yyyy-MM-dd"
            maxDate={new Date()}
          />
        </div>
        <div className="req-button">
          <button onClick={handleApply}>Apply</button>
        </div>
      </div>
    </div>
  );
}
