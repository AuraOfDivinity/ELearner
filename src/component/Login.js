import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import firebase from "firebase";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import Axios from "axios";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    const uid = localStorage.getItem('uid');
    console.log(uid);
    Axios.get('http://localhost:5000/api/user/' + uid).then(response => {
      if (response.status == 200) window.location = '/';
    }).catch(e => {
      window.location = '/Login';
    })
  }

  onChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };
  onSumbit = event => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        axios
          .get("http://localhost:5000/api/user/" + res.user.uid)
          .then(response => {
            localStorage.setItem("uid", res.user.uid);
            switch (response.data.usertype) {
              case "student":
                NotificationManager.info("Welcome :)", "Success");
                window.location = "/StudentDashboard";
                break;
              case "admin":
                NotificationManager.info("Welcome :)", "Success");
                window.location = "/admindash";
                break;
              case "moderator":
                NotificationManager.info("Welcome :)", "Success");
                window.location = "/AllCourses";
                break;
              default:
                NotificationManager.error("Api error !");
            }
          });
      })
      .catch(e => {
        NotificationManager.error(e.message, "Invalid Username and Password");
      });
  };

  render() {
    const classes = useStyles;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <br />
        <br />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              value={this.state.email}
              onChange={this.onChangeEmail.bind(this)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              value={this.state.password}
              onChange={this.onChangePassword.bind(this)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={this.onSumbit.bind(this)}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    );
  }
}

export default Login;
