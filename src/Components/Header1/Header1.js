// import React from "react";
// import { elastic as Menu } from "react-burger-menu";
// import "./Header1.css";
// import { Squash as Hamburger } from "hamburger-react";

// export default function SecHeader(props) {
//   const handleLogout = () => {
//     localStorage.removeItem("AUTH");
//     localStorage.removeItem("User_details");
//     props.history.push("/");
//   };
//   return (
//     <div className="main-head flexing">
//       <div className="hamwrap">
//         <div className="hamburger">
//           <Hamburger></Hamburger>
//         </div>
//         <Menu>
//           <a className="menu-item" href="/dashboard">
//             Dashboard
//           </a>
//           <a className="menu-item" href="/profile">
//             Profile
//           </a>
//           <a className="menu-item" href="/allrequest">
//             My Requests
//           </a>
//           <a className="menu-item" href="/donate">
//             My Donations
//           </a>
//         </Menu>
//       </div>
//       <div className="flexing hoab">
//         <a href="/" onClick={handleLogout}>
//           <div id="b-home">LOGOUT</div>
//         </a>
//         <a href="/">
//           <div id="b-us">ABOUT US</div>
//         </a>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TemporaryDrawer from "../Drawer/Drawer";



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
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ marginBottom: "75px" }}>
      <MuiThemeProvider theme={Theme}>
        <AppBar position="fixed">
        
          <Toolbar variant="dense">
          <div style={{width:"90px",margin:"-1%"}}><TemporaryDrawer></TemporaryDrawer></div>
            <Typography variant="h6" className={classes.title}>
              Blood Bank Drive
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
}
