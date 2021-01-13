
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";



const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#364652",
    },
    secondary: {
      main: "#364652",
    },
    action:{
      main:"#00FF00"
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexDirection:"row",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  textdnone:{
    textDecoration:"none",
    color:"white",
    paddingLeft:"2%",
    paddingRight:"2%",
  },

}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ marginBottom: "75px" }}>
      <MuiThemeProvider theme={Theme}>
        <AppBar position="fixed">
          <Toolbar variant="dense">
          <div style={{width:"90px",margin:"-1%"}}></div>
            <Typography variant="h6" className={classes.title}>
              Blood Bank Drive
            </Typography>
            
            <a href="/register" className={classes.textdnone}><Button color="inherit">Register</Button></a>
            <a href="/login" className={classes.textdnone}><Button color="inherit">Login</Button></a>
            <a href="/" className={classes.textdnone}><Button color="inherit">AboutUs</Button></a>
            
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
}
