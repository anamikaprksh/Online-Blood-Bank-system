import React, { useEffect, useState } from "react";
import "./Donate.css";
import { requestNotFullfilled } from "../../functions/user";
import DetailsCard from "../DetailsCard/detailsCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Loading from "../Animation/Animation";
import Typography from "@material-ui/core/Typography";
import NoResult from "../../images/no-results.png";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  bg:{
    backgroundColor:"#eeeeee",
    minHeight: "89vh",
  },
  mar:{
    paddingLeft:100,
    paddingRight:100,
  },
  notfound: {
    textAlign:"center"
  },
  image:{
    maxWidth:theme.spacing(50),
    marginLeft:theme.spacing(50),
    marginTop:100
  },
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
    <div className={classes.bg}>
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
      <Grid container className={classes.mar} spacing={10}>
        {data.map((e) => {
          return (
            <Grid item lg={6} xs={12}>
              <DetailsCard rows={e} />
            </Grid>
          );
        })}
      </Grid>
      {data.length == 0 && !loading && (
            <div className={classes.notfound}>
              <img src={NoResult} className={classes.image}></img>
              <Typography>There is no request matching your blood group </Typography>
            </div>
          )}
    </div>
  );
}
