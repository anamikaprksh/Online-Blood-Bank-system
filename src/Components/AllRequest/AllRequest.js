import React, { useEffect, useState } from "react";
import "./AllRequest.css";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { MyRequest } from "../../functions/user";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "../Animation/Animation";

const useStyles = makeStyles((theme) => ({
  colr: {
    color: "#00FF00",
  },
}));

export default function AllReq() {
  const [load, setLoad] = useState(false);
  const classes = useStyles();
  const [fresult, setFresult] = useState([]);
  let udetails = JSON.parse(localStorage.getItem("User_details"));
  const handleApply = async () => {
    const data = {
      username: udetails.username,
    };
    let result;

    try {
      setLoad(true);
      result = await MyRequest(data);
      setLoad(false);
      setFresult(result);
      console.log(result);
    } catch (err) {
      console.log(err);
      alert("error");
    }
  };
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

        <div>
          <div className="flexing">
            <h2 className="hcolor">Request ID</h2>
            <h2 className="hcolor">Blood Group</h2>
            <h2 className="hcolor">Units</h2>
            <h2 className="hcolor">Date Of Request</h2>
            <h2 className="hcolor">Solved</h2>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "2%" }}>
          {load && <Loading></Loading>}
        </div>
        {fresult.map((eachr) => (
          <div className="flexing mar">
            <div className="a-req flexing">
              <h2 style={{ width: "20%" }}>{eachr.request_id}</h2>
              <h2 style={{ width: "20%" }}>{eachr.blood_group}</h2>
              <h2 style={{ width: "20%" }}>{eachr.units}</h2>
              <h2 style={{ width: "20%" }}>
                {eachr.date_of_request.slice(0, 10)}
              </h2>
              {eachr.solved && (
                <h2 style={{ width: "20%" }}>
                  <CheckCircleOutlineIcon
                    className={classes.colr}
                  ></CheckCircleOutlineIcon>
                </h2>
              )}
              {!eachr.solved && (
                <h2 style={{ width: "20%" }}>
                  <CancelOutlinedIcon color="error"></CancelOutlinedIcon>
                </h2>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
