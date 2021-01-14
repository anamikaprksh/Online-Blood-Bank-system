import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { solvedRequest } from "../../functions/user";
import SolvedCard from "./solvedRequestCard";
import Animation from "../Animation/Animation";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  grid:{
    padding:30
  }
}));

export default function AutoGrid() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleGenarateSolvedRequest = async () => {
    const { username } = JSON.parse(localStorage.getItem("User_details"));
    try {
      setLoading(true)
      const result = await solvedRequest({ username });
      setLoading(false)
      setData(result);
      console.log(result)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(()=>{
      handleGenarateSolvedRequest()
  },[])
  return (
    <div className={classes.root}>
      <div style={{ textAlign: "center" }}>
        {loading && <Animation></Animation>}
      </div>
      <Grid container spacing={3} className={classes.grid}>
        {data.map((e) => {
          return (
            <Grid item lg={4}>
              <SolvedCard rows={e} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
