import React, { useEffect, useState } from "react";
import "./AllRequest.css";
import { MyRequest } from "../../functions/user";
import { makeStyles } from "@material-ui/core/styles";
import TabSwitch from "../TabSwitch/tabSwitch"
import SolvedData from './solvedRequestGenerator'
import UnSolvedData from './unsolvedRequestGenerator'

const useStyles = makeStyles((theme) => ({
  colr: {
    color: "#00FF00",
  },
}));

export default function AllReq() {
  const [load, setLoad] = useState(false);
  const classes = useStyles();
  const [fresult, setFresult] = useState([]);
  const [heading,setHeading]=useState(false)
  let udetails = JSON.parse(localStorage.getItem("User_details"));
  useEffect(() => {
  }, [heading]);

  return (
    <div className="bk-img">
      <div className="outer">
        <div>
          <div className="p-head">
            <h1>{heading?"Solved Request":"Unsolved Request"}</h1>
          </div>
          <TabSwitch headswitch={setHeading}/>
        </div>
      </div>
      <div>
        {heading && <SolvedData/>}
        {!heading && <UnSolvedData/>}
      </div>
    </div>
  );
}
