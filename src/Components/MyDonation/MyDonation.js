import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { MyDonationapi } from "../../functions/user";
import Animation from "../Animation/Animation";
import DDetailsCard from "./DDetailsCard";
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
    paddingLeft: "5%",
    paddingRight: "5%",
    width: "90%",
  },
  gt:{
    padding:30,
  }
});

export default function MyDonation() {
  const classes = useStyles();
  const [fresult, setFresult] = useState([]);
  const [load, setLoad] = useState(false);
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
      console.log(fresult);
    } catch (err) {
      console.log(err);
      alert("error");
    }
  };
  useEffect(() => {
    handleApply();
  }, []);

  return (
    <div>
      <div>
        <h1>My Donations</h1>
      </div>
      <div className={classes.hr}>
        <hr></hr>
      </div>
      <div style={{ textAlign: "center" }}>
        {load && <Animation></Animation>}
      </div>
      <Grid container spacing={3} className={classes.gt}>
        {fresult.map((inside) => {
          return (
            <Grid item lg={4}>
            <DDetailsCard rows={inside} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
