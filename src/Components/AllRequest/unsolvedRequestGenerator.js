import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { unSolvedRequest } from "../../functions/user";
import UnSolvedCard from "./unsolvedRequestCard";

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
  const handleGenarateSolvedRequest = async () => {
    const { username } = JSON.parse(localStorage.getItem("User_details"));
    try {
      const result = await unSolvedRequest({ username });
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
      <Grid container spacing={3} className={classes.grid}>
        {data.map((e) => {
          return (
            <Grid item lg={4}>
              <UnSolvedCard rows={e} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
