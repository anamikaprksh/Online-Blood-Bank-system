import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { selectDonor, deselectDonor } from "../../functions/user";
import Loading from "../LoadingAnimation/loading";
import SnackBar from "../SnackBar/SnackBar";

const useStyles = makeStyles({
  table: {
    maxWidth: 600,
  },
  bg: {
    backgroundColor: "#eeeeee",
    minHeight: "89vh",
  },
  paper: {
    maxWidth: 500,
    marginBottom: 50,
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
  const [selected, setSelected] = useState(props.rows.selected);
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState(false);
  const [succerr, setSuccerr] = useState("");
  const [descri, setDescri] = useState("");
  const handleSelect = async () => {
    setLoading(true);
    const { username } = JSON.parse(localStorage.getItem("User_details"));
    try {
      console.log({ username, request_id: props.requestId });
      const result = await selectDonor({
        username: row.username,
        request_id: props.requestId,
      });
      setSnack(true);
      setSuccerr("success");
      setDescri("Selected!");
      setSelected(true);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  const handleDeselect = async () => {
    setLoading(true);
    try {
      const result = await deselectDonor({
        username: row.username,
        request_id: props.requestId,
      });
      setSnack(true);
      setSuccerr("error");
      setDescri("Deselected!");
      setSelected(false);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  return (
    <div>
      <TableContainer component={Paper} className={classes.paper}>
        {loading && <Loading />}
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            <TableRow key={row.username}>
              <TableCell component="th" scope="row">
                Username
              </TableCell>
              <TableCell align="center">{row.username}</TableCell>
            </TableRow>
            <TableRow key={row.gender}>
              <TableCell component="th" scope="row">
                Gender
              </TableCell>
              <TableCell align="center">{row.gender}</TableCell>
            </TableRow>
            <TableRow key={row.phoneNo}>
              <TableCell component="th" scope="row">
                Phone Number
              </TableCell>
              <TableCell align="center">
                {String(row.phoneNo).slice(0, 10)}
              </TableCell>
            </TableRow>
            <TableRow key={row.email}>
              <TableCell component="th" scope="row">
                Email
              </TableCell>
              <TableCell align="center">
                {String(row.email).slice(0, 10)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className={classes.buttonDiv}>
          {selected && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleDeselect}
              className={classes.button}
              size="small"
            >
              Deselect
            </Button>
          )}

          {!selected && (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSelect}
              className={classes.button}
              size="small"
            >
              Select
            </Button>
          )}
        </div>
      </TableContainer>
      {snack && (
        <SnackBar
          con={succerr}
          stat={snack}
          fun={setSnack}
          desc={descri}
        ></SnackBar>
      )}
    </div>
  );
}
