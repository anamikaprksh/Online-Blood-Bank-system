import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { showWilling, cancelWilling } from "../../functions/user";
import Loading from "../LoadingAnimation/loading";
import SnackBar from "../SnackBar/SnackBar";

const useStyles = makeStyles({
  table: {
    maxWidth: 600,
  },
  paper: {
    maxWidth: 600,
    marginBottom: 50,
    marginTop: 20,
  },
  button: {
    marginTop: 30,
    marginBottom: 30,
  },
  buttonDiv: {
    textAlign: "center",
  },
});

export default function BasicTable(props) {
  const classes = useStyles();
  const [row, serRow] = useState(props.rows);
  const [loading, setLoading] = useState(false);
  const [willing, setWilling] = useState(false);
  const [snack, setSnack] = useState(false);
  const [succ, setSucc] = useState("");
  const [descri, setDescri] = useState("");
  const handleWilling = async () => {
    setLoading(true);
    const { username } = JSON.parse(localStorage.getItem("User_details"));
    try {
      const result = await showWilling({
        username,
        request_id: row.request_id,
      });
      setSucc("success");
      setSnack(true);
      setDescri("Request send!");
      setWilling(true);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  const handleCancelWilling = async () => {
    setLoading(true);
    const { username } = JSON.parse(localStorage.getItem("User_details"));
    try {
      const result = await cancelWilling({
        username,
        request_id: row.request_id,
      });
      setSucc("error");
      setSnack(true);
      setDescri("Request cancelled!");
      setWilling(false);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <TableContainer component={Paper} className={classes.paper}>
      {loading && <Loading />}
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          <TableRow key={row.request_id}>
            <TableCell component="th" scope="row">
              Request ID
            </TableCell>
            <TableCell align="center">{row.request_id}</TableCell>
          </TableRow>
          <TableRow key={row.userId}>
            <TableCell component="th" scope="row">
              Username
            </TableCell>
            <TableCell align="center">{row.userId}</TableCell>
          </TableRow>
          <TableRow key={row.blood_group}>
            <TableCell component="th" scope="row">
              Blood Group
            </TableCell>
            <TableCell align="center">{row.blood_group}</TableCell>
          </TableRow>
          <TableRow key={row.units}>
            <TableCell component="th" scope="row">
              Units
            </TableCell>
            <TableCell align="center">{row.units}</TableCell>
          </TableRow>
          <TableRow key={row.units}>
            <TableCell component="th" scope="row">
              Date of Request
            </TableCell>
            <TableCell align="center">
              {String(row.date_of_request).slice(0, 10)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className={classes.buttonDiv}>
        {!willing && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleWilling}
            className={classes.button}
          >
            Donate
          </Button>
        )}
        {willing && (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCancelWilling}
            className={classes.button}
          >
            Cancel
          </Button>
        )}
      </div>
      {snack && (
        <SnackBar
          con={succ}
          stat={snack}
          fun={setSnack}
          desc={descri}
        ></SnackBar>
      )}
    </TableContainer>
  );
}
