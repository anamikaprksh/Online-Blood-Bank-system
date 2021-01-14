import React, { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {cancelRequest} from "../../functions/user";
import DialogPopUp from './dialogPopUp'
import Loading from "../LoadingAnimation/loading";
import { Row } from "@material-ui/data-grid";

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
    marginRight:20,
    marginLeft:20
  },
  buttonDiv: {
    textAlign: "center",
  }
});

export default function BasicTable(props) {
  const classes = useStyles();
  const [row, serRow] = useState(props.rows);
  const [disableDelete,setDisableDelete]=useState(false)
  const [enableDetails,setEnableDetails]=useState(false)
  const [loading, setLoading] = useState(false);
  const handleDetails =() => {
    setEnableDetails(true)
  };
  const handleDelete= async () => {
    var answer = window.confirm("Are you sure you want to delete request?")
    const {request_id}=row
    if (answer){
      setLoading(true)
      try{
        const result=await cancelRequest({request_id})
        setDisableDelete(true)  
      }
      catch(err){
        console.log(err)
      }
      setLoading(false)
    }
  };
  useEffect(()=>{

  },[enableDetails,disableDelete])
  return (
    <TableContainer component={Paper} className={classes.paper}>
      {loading && <Loading />}
      {enableDetails && <DialogPopUp detailsFunction={setEnableDetails} row={row}/>}
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
      <div className={classes.buttonDiv}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleDetails}
          className={classes.button}
          size="small"
        >
         Details
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={handleDelete}
          className={classes.button}
          size="small"
          disabled={disableDelete}
        >
          Delete  
        </Button>
      </div>
    </TableContainer>
  );
}
