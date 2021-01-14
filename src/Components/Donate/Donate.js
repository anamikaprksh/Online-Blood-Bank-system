import React, { useEffect, useState } from "react";
import "./Donate.css";
import { requestNotFullfilled } from "../../functions/user";
import { set } from "date-fns";
import DetailsCard from "../DetailsCard/detailsCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Loading from "../Animation/Animation";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  mar:{
    paddingLeft:115
  }
}));

export default function Donation() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { blood, username } = JSON.parse(localStorage.getItem("User_details"));
  const handleDataFetch = async () => {
    try {
      setLoading(true)
      const result = await requestNotFullfilled({
        username,
        blood_group: blood,
      });
      setLoading(false)
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
      <div style={{ textAlign: "center", marginTop: "2%" }}>
          {loading && <Loading></Loading>}
        </div>
      <Grid container className={classes.mar}>
        {data.map((e) => {
          return (
            <Grid item lg={6} xs={12}>
              <DetailsCard rows={e} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
