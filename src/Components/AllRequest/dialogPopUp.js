import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { donorDetails } from "../../functions/user";
import UserCard from "./userCard";
import Grid from "@material-ui/core/Grid";
import NoResult from "../../images/no-results.png";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  appBar: {
    position: "fixed",
    maxWidth: "100%",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  bodytitle: {
    marginTop: 100,
    marginLeft: 20,
  },
  grid: {
    margin: 20,
  },
  notfound: {
    alignSelf: "center",
    textAlign:"center"
  },
  image:{
    maxWidth:theme.spacing(50)
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [row, setRow] = React.useState(props.row);
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    props.detailsFunction(false);
  };
  const handleFetchUserDetails = async () => {
    const { request_id } = row;
    try {
      const result = await donorDetails({ request_id });
      console.log(result);
      setData(result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleFetchUserDetails();
  }, []);
  return (
    <div className={classes.root}>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              DETAILS
            </Typography>
          </Toolbar>
        </AppBar>
        <Typography variant="h4" className={classes.bodytitle}>
          List of donors who are ready to donate.
        </Typography>
        <Grid container spacing={3} className={classes.grid}>
          {data.map((e) => {
            return (
              <Grid item lg={4}>
                <UserCard rows={e} requestId={row.request_id} />
              </Grid>
            );
          })}
        </Grid>
        {data.length == 0 && (
            <div className={classes.notfound}>
              <img src={NoResult} className={classes.image}></img>
              <Typography>No Donors found </Typography>
            </div>
          )}
      </Dialog>
    </div>
  );
}
