import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
});

export default function DDOnationCard(props) {
  const classes = useStyles();
  const [row, serRow] = useState(props.rows);
  return (
    <div>
      
      <Grid item lg={12}>
        <TableContainer component={Paper} className={classes.paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Request ID
                </TableCell>
                <TableCell align="center">{row.request_id}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                Username
                </TableCell>
                <TableCell align="center">{row.userId}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                Blood Group
                </TableCell>
                <TableCell align="center">{row.blood_group}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                Units
                </TableCell>
                <TableCell align="center">{row.units}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                Date of Request
                </TableCell>
                <TableCell align="center">{String(row.date_of_request).slice(0, 10)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
}
