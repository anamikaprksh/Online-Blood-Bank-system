import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TemporaryDrawer from "../Drawer/Drawer";
import { PinDropSharp } from "@material-ui/icons";

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#364652",
    },
    secondary: {
      main: "#364652",
    },
    action: {
      main: "#00FF00",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexDirection: "row",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  draw: {
    width: "90px",
    padding: "0.5%",
  },
  col: {
    color: "white",
    textDecoration: "none",
  },
  textdnone: {
    textDecoration: "none",
    color: "white",
    paddingLeft: "2%",
    paddingRight: "2%",
  },
}));

export default function ButtonAppBar(props) {
  const [showHide, setShowHide] = useState(false);
  const [check,setCheck]=useState('')
  
  const classes = useStyles();
  const handlelogOut = () => {
    localStorage.removeItem("User_details");
    localStorage.removeItem("AUTH");
  };
  useEffect(() => {
    const flag=localStorage.getItem("AUTH")
    flag ? setShowHide(true) : setShowHide(false);
    console.log(showHide);
  },[]);
    
    
  return (
    <div className={classes.root} style={{ marginBottom: "75px" }}>
      <MuiThemeProvider theme={Theme}>
        <AppBar position="fixed">
          <Toolbar variant="dense">
           <div className={classes.draw}>
           {showHide && (<TemporaryDrawer></TemporaryDrawer>)}
            </div>
            <Typography variant="h6" className={classes.title}>
              Blood Bank Drive
            </Typography>
            {showHide && (
              <a href="/" className={classes.col}>
                <Button color="inherit" onClick={handlelogOut}>
                  Logout
                </Button>
              </a>
            )}
            {!showHide && (
              <a href="/register" className={classes.textdnone}>
                <Button color="inherit">Register</Button>
              </a>
            )}
            {!showHide && (
              <a href="/login" className={classes.textdnone}>
                <Button color="inherit">Login</Button>
              </a>
            )}
            {!showHide && (
              <a href="/" className={classes.textdnone}>
                <Button color="inherit">AboutUs</Button>
              </a>
            )}
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
}
