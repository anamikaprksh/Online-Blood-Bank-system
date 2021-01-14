import React, { useEffect, useState } from "react";
import "./Donate.css";
import { requestNotFullfilled } from "../../functions/user";
import { set } from "date-fns";
import DetailsCard from "../DetailsCard/detailsCard";
import Grid from "@material-ui/core/Grid";

export default function Donation() {
  const [data, setData] = useState([]);
  const { blood, username } = JSON.parse(localStorage.getItem("User_details"));
  const handleDataFetch = async () => {
    try {
      const result = await requestNotFullfilled({
        username,
        blood_group: blood,
      });
      console.log(result);
      setData(result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleDataFetch();
  }, []);
  return (
    <div className="back-img">
      <div className="outer1">
        <div className="heading">
          <h1>Donate</h1>
        </div>
        <div>
          <hr></hr>
        </div>
      </div>
      <Grid container>
        <Grid item lg={3} xs={12}></Grid>
        <Grid item lg={6} xs={12}>
          {data.map((e) => {
            return <DetailsCard rows={e} />;
          })}
        </Grid>
      </Grid>
    </div>
  );
}
