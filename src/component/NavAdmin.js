import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" class="brand-logo center">
              E-Learning Portal
            </Link>
          </Typography>
          <Link to="/">
              <Button color="inherit">Home</Button>
          </Link>
          <Link to ="/admindash">
              <Button color="inherit">Users</Button>
          </Link>
          <Link to ="/ModDashboard">
              <Button color="inherit">Change to moderator</Button>
          </Link>
            <Button color="inherit" onClick={()=>{
              localStorage.setItem('uid',null);
              window.location = '/'
            }}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}