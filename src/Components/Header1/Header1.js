import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TemporaryDrawer from "../Drawer/Drawer";
import Dialog from '../Dialog/dialog'
import { Spin as Hamburger } from "hamburger-react";

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
  appb:{
    backgroundColor:"#364653"
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
  dbutton:{
    marginRight:30
  },
  ham:{
    margin:'5%',
  },
  
}));

export default function ButtonAppBar(props) {
  const [showHide, setShowHide] = useState(false);
  const [dialog,setDialog]=useState()
  const classes = useStyles();
  useEffect(()=>{
    const flag=JSON.parse(localStorage.getItem('AUTH'))
    flag?setShowHide(true):setShowHide(false)
  },[dialog])
  return (
    <div className={classes.root} style={{ marginBottom: "75px" }}>
      {dialog && <Dialog state={true} func={setDialog}/>}
      <MuiThemeProvider theme={Theme}>
        <AppBar position="fixed" className={classes.appb}>
          <Toolbar>
           <div className={classes.draw}>
           {showHide && (<TemporaryDrawer></TemporaryDrawer>)}
           {!showHide && (<div className={classes.ham}><Hamburger></Hamburger></div>)}
            </div>
            <Typography variant="h6" className={classes.title}>
              Blood Bank Drive
            </Typography>
            {showHide && (
                <Button color="inherit" href="/dashboard" className={classes.dbutton}>
                  Dashboard
                </Button>
            )}
            {showHide && (
                <Button color="inherit" onClick={()=>setDialog(true)}>
                  Logout
    
                </Button>
            )}
            {!showHide && (
              <a href="/signup" className={classes.textdnone}>
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
                <Button color="inherit">Home</Button>
              </a>
            )}
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
}
