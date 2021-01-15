import React, { useEffect, useState } from "react";
import "./Request.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Request } from "../../functions/user";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "../Animation/Animation.js";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import SnackBar from "../SnackBar/SnackBar";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(5),
      width: "30ch",
    },
  },
  textfield: {
    width: theme.spacing(50),
    marginTop: theme.spacing(5),
    textAlign: "left",
  },
  abutton: {
    width: 200,
    borderRadius: "30px",
    paddingTop: 10,
    marginTop: 40,
  },
}));
const bgroup = [
  {
    label: "A+",
    value: "A+",
  },
  {
    label: "B+",
    value: "B+",
  },
  {
    label: "AB+",
    value: "AB+",
  },
  {
    label: "O+",
    value: "O+",
  },
  {
    label: "A-",
    value: "A-",
  },
  {
    label: "B-",
    value: "B-",
  },
  {
    label: "AB-",
    value: "AB-",
  },
  {
    label: "O-",
    value: "O-",
  },
];

export default function Requests() {
  const classes = useStyles();
  const [snack, setSnack] = useState(false);
  const [succerr, setSuccerr] = useState("");
  const [descri, setDescri] = useState("");
  const [blood_group, setBloodgroup] = useState("");
  const [units, setUnits] = useState("");
  const [date_of_request, setDoa] = useState(new Date());
  const [username, setUserId] = useState("");
  // const [detls, setDetls] = useState({});
  const handleChange = (e) => {
    setBloodgroup(String(e.target.value));
  };

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
    console.log(data);
    let result;
    console.log(data);
    try {
      result = await Request(data);
      // localStorage.setItem("User_details", JSON.stringify(result));
      // localStorage.setItem("AUTH", true);
      // props.history.push("/dashboard");
      setSnack(true);
      setSuccerr("success");
      setDescri("Request submitted successfully!");
    } catch (err) {
      console.log(err);
      setSnack(true);
      setSuccerr("error");
      setDescri("Request submission failed!");
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
          <TextField
            id="outlined-basic"
            label="Blood Group"
            select
            value={blood_group}
            onChange={handleChange}
            variant="outlined"
            className={classes.textfield}
          >
            {bgroup.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Units"
            onChange={(e) => setUnits(e.target.value)}
            variant="outlined"
            className={classes.textfield}
          />
        </div>
        <div className="datepick">
          <DatePicker
            placeholderText="date"
            className="date1"
            selected={date_of_request}
            onChange={(date) => setDoa(date)}
            dateFormat="yyyy-MM-dd"
            // maxDate={new Date()}
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleApply}
            className={classes.abutton}
          >
            Apply
          </Button>
        </div>
      </div>
      {snack && (
        <SnackBar
          con={succerr}
          stat={snack}
          fun={setSnack}
          desc={descri}
        ></SnackBar>
      )}
    </div>
  );
}
