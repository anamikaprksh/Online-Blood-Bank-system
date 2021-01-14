import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { MyDonationapi,upcomingdonation } from "../../functions/user";
import Animation from "../Animation/Animation";
import DDetailsCard from "./DDetailsCard";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
  paper: {
    maxWidth: 600,
    marginBottom: 50,
    marginTop: 30,
  },
  hr: {
    paddingLeft: "2%",
    paddingRight: "2%",
    width: "96%",
  },
  gt: {
    padding: 30,
  },
  pp: {
    textAlign: "center",
   marginRight:"2%",
   marginLeft:"2%",
  },
});

export default function MyDonation() {
  const classes = useStyles();
  const [topic, setTopic] = useState(false);
  const [fresult, setFresult] = useState([]);
  const [fresultup, setFresultup] = useState([]);
  const [load, setLoad] = useState(true);
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if(value==1){
      setTopic(true);
    }
    else{
      setTopic(false)
    }
    console.log(value);
  };
  

  let udetails = JSON.parse(localStorage.getItem("User_details"));

  const handleApply = async () => {
    const data = {
      username: udetails.username,
    };
    let result;
    try {
      setLoad(true);
      result = await MyDonationapi(data);
      setLoad(false);
      setFresult(result);
    } catch (err) {
      console.log(err);
      alert("error");
    }
  };
  const handleUpcoming = async () => {
    const data = {
      username: udetails.username,
    };
    let resultUp;

    try {
      setLoad(true);
      resultUp = await upcomingdonation(data);
      setLoad(false);
      setFresultup(resultUp);
    } catch (err) {
      console.log(err);
      alert("error");
    }
  };
  useEffect(() => {
    handleApply();
    handleUpcoming();
  }, []);

  return (
    <div>
      <div>
        <h1>My Donations</h1>
      </div>
      <div className={classes.hr}>
        <hr></hr>
      </div>
      <div>
        {/* <div className="p-head">
            <h2>{heading?"Solved Donations":"Unsolved Donations"}</h2>
          </div >
          <div style={{ paddingLeft:"45%"}}>
          <TabSwitch headswitch={setHeading}/>
          </div> */}
        <Paper square className={classes.pp}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="secondary"
            centered
            TabIndicatorProps={{
              style: { opacity: "15%", paddingLeft: "0.5%" },
            }}
          >
            <Tab label="Solved Donations" />
            <Tab label="Upcoming Donations" />
          </Tabs>
        </Paper>
      </div>
      <div style={{ textAlign: "center" }}>
        {load && <Animation></Animation>}
      </div>

      {topic && (
        <Grid container spacing={3} className={classes.gt}>
          {fresult.map((inside) => {
            return (
              <Grid item lg={4}>
                <DDetailsCard rows={inside} />
              </Grid>
            );
          })}
        </Grid>
      )}
      {!topic && (
        <Grid container spacing={3} className={classes.gt}>
          {fresultup.map((inside) => {
            return (
              <Grid item lg={4}>
                <DDetailsCard rows={inside} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
}
