import React, { useEffect, useState } from "react";
import "./AllRequest.css";
import { makeStyles } from "@material-ui/core/styles";
import TabSwitch from "../TabSwitch/tabSwitch";
import SolvedData from "./solvedRequestGenerator";
import UnSolvedData from "./unsolvedRequestGenerator";


const useStyles = makeStyles((theme) => ({
  colr: {
    color: "#00FF00",
  },
  hr: {
    paddingLeft: "2%",
    paddingRight: "2%",
    width: "96%",
  },
  pp: {
    textAlign: "center",
    marginRight: "2%",
    marginLeft: "2%",
  },
  tabe: {
    paddingLeft: "2%",
  },
  tabe1: {
    paddingLeft: "1%",
  },
  fle: {
    display: "flex",
  },
}));

export default function AllReq() {
  const [load, setLoad] = useState(false);
  const classes = useStyles();
  const [heading, setHeading] = useState(false);
  const [value, setValue] = React.useState(1);
  const [topic, setTopic] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (value == 1) {
      setTopic(true);
    } else {
      setTopic(false);
    }
    console.log(value);
  };

  let udetails = JSON.parse(localStorage.getItem("User_details"));
  useEffect(() => {}, [heading]);

  return (
    <div>
      <div>
        <div>
          <div>
            <div className="p-head">
              <h1>{heading ? "Solved Requests" : "Unsolved Requests"}</h1>
            </div>
            <div style={{ paddingLeft: "45%" }}>
              <TabSwitch headswitch={setHeading} />
            </div>
          </div>
          <div className={classes.hr}>
            <hr></hr>
          </div>
          {/* <Paper square className={classes.pp}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="secondary"
            centered
            TabIndicatorProps={{
              style: { opacity: "15%", paddingLeft: "0.5%"},
            }}
          >
            <Tab label="Solved Requests" className={classes.tabe}/>
            <Tab label="Unsolved Requests" className={classes.tabe}/>
          </Tabs>
        </Paper> */}
        </div>
      </div>
      <div>
        {heading && <SolvedData />}
        {!heading && <UnSolvedData />}
      </div>
    </div>
  );
}
