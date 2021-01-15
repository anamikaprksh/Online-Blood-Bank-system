import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { unSolvedRequest } from "../../functions/user";
import UnSolvedCard from "./unsolvedRequestCard";
import Animation from "../Animation/Animation";
import NoResult from "../../images/no-results.png";
import Typography from "@material-ui/core/Typography";


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
  },
  notfound: {
    alignSelf: "center",
    textAlign:"center"
  },
  image:{
    maxWidth:theme.spacing(50),
    marginLeft:theme.spacing(50)
  }
}));

export default function AutoGrid() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [loadanim, setLoadanim] = useState(false);
  const handleGenarateSolvedRequest = async () => {
    const { username } = JSON.parse(localStorage.getItem("User_details"));
    try {
      setLoadanim(true)
      const result = await unSolvedRequest({ username });
      setLoadanim(false)
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
        {loadanim && <Animation></Animation>}
      </div>
      <Grid container spacing={3} className={classes.grid}>
        {data.map((e) => {
          return (
            <Grid item lg={4}>
              <UnSolvedCard rows={e} />
            </Grid>
          );
        })}
      </Grid>
      {data.length == 0 && !loadanim &&(
            <div className={classes.notfound}>
              <img src={NoResult} className={classes.image}></img>
              <Typography>Empty Request!</Typography>
              <Typography><a href='/request'>Click here to add new request</a></Typography>
            </div>
          )}
    </div>
  );
}
