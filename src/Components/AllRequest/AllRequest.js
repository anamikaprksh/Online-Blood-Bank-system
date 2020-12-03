import React, { useEffect, useState } from "react";
import "./AllRequest.css";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {MyRequest} from '../../functions/user'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  
  colr:{
    color:"#00FF00"
  }
}));

export default function AllReq() {
  const classes = useStyles();
  const [fresult,setFresult]=useState([])
  let udetails = JSON.parse(localStorage.getItem("User_details"));

  

  const handleApply = async () => {
    const data = {
      username:udetails.username,
    };
    let result;
    
    try {
      result = await MyRequest(data);
      setFresult(result);
      console.log(result)
      
    } catch (err) {
      console.log(err);
      alert("error");
    }
  }
  useEffect(() => {
    handleApply();
    
  }, []);
  

  return (
    <div className="bk-img">
      <div className="outer">
        <div>
          <div className="p-head">
            <h1>My Requests</h1>
          </div>
          <div>
            <hr></hr>
          </div>
        </div>
        {
          fresult.map((eachr)=>(
            
            <div className="flexing mar">
              
            <div className="a-req flexing">
          <h2 style={{width:"50%"}}>{eachr.request_id}</h2>
              {(eachr.solved) && <h2 style={{width:"50%"}}><CheckCircleOutlineIcon className={classes.colr}></CheckCircleOutlineIcon></h2>}
              {(!eachr.solved) && <h2  style={{width:"50%"}}><CancelOutlinedIcon color="error"></CancelOutlinedIcon></h2>}
            </div>
            <div className="a-button">
            <Button variant="contained" color="secondary">
        More
      </Button>
            </div>
          </div>
          ))
        }
      </div>
    </div>
  );
}
