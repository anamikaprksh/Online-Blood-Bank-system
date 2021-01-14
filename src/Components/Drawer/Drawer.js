import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


import { Spin as Hamburger } from "hamburger-react";
import "./Drawer.css";

const useStyles = makeStyles({
  root: {
    width: '100%',
    // maxWidth: 450,
    // maxHeight:200,
    paddingTop:"1%",
    marginBottom:"-2%"
    
    // backgroundColor: theme.palette.background.paper,
  },
  root1:{
    marginTop:"1%"
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function TemporaryDrawer() {
  
  const [iOpen, setIOpen] = useState(false);
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  const toggleDrawer = (anchor, open) => (event) => {
    setIOpen(open);

    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={
        (clsx(classes.list, {
          [classes.fullList]: anchor === "top" || anchor === "bottom",
        }),
        "dd-menu")
      }
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text} href="simple-list">
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      <div>
        <list>
        <Divider />
        <ListItemLink href="/dashboard">
          <ListItemText primary="Dashboard" className={classes.root}/>
        </ListItemLink>
        <Divider />
        <ListItemLink href="/profile">
          <ListItemText primary="Profile" className={classes.root}/>
        </ListItemLink>
        <Divider />
        <ListItemLink href="/allrequest">
          <ListItemText primary="My Requests" className={classes.root}/>
        </ListItemLink>
        <Divider />
        <ListItemLink href="/MyDonation">
          <ListItemText primary="My Donations" className={classes.root1}/>
        </ListItemLink>
        <Divider />   
        </list>
      </div>

      {/* <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
    </div> */}

      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );
  //   console.log(iOpen);

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Hamburger
              toggled={iOpen}
              toggle={setIOpen}
              color="white"
              size={30}
              rounded
              direction="right"
            />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
