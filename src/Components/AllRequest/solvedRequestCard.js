import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    maxWidth: 600,
  },
  paper: {
    maxWidth: 600,
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
  const [loading,setLoading]=useState(false)
  

  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          <TableRow key={row.request_id}>
            <TableCell component="th" scope="row">
              Request ID
            </TableCell>
            <TableCell align="center">{row.request_id}</TableCell>
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
    </TableContainer>
  );
}
