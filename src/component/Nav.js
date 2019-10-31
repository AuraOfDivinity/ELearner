// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// class Nav extends Component {
//   render() {
//     return (
//       <div>
//         <nav className="green darken-3">
//           <div class="nav-wrapper">
// <Link to="/" class="brand-logo center">
//   E-Learning Portal
// </Link>
//             <a href="#" data-target="mobile-demo" class="sidenav-trigger">
//               <i class="material-icons">menu</i>
//             </a>
//             <ul class="right hide-on-med-and-down">
//               <li>
//                 <Link to="/">HOME</Link>
//               </li>
//               <li>
//                 <Link to="/booklist">BOOK</Link>
//               </li>
//               <li>
//                 <Link to="/Bus">TIME TABLE</Link>
//               </li>
//               <li>
//                 <Link to="/Bus">CONTACT US</Link>
//               </li>
//             </ul>
//           </div>

//           <ul class="sidenav" id="mobile-demo">
//             <li>
//               <Link to="/">HOME</Link>
//             </li>
//             <li>
//               <Link to="/booklist">BOOK</Link>
//             </li>
//             <li>
//               <Link to="/Bus">TIME TABLE</Link>
//             </li>
//             <li>
//               <Link to="/Bus">CONTACT US</Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     );
//   }
// }

// export default Nav;

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
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
