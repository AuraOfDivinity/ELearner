import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Axios from "axios";
import { NotificationManager } from "react-notifications";

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

class AddCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseName: "",
      enrolmentKey: ""
    };
  }
  componentDidMount() {
    const uid = localStorage.getItem('uid');
    console.log(uid);
    Axios.get('http://localhost:5000/api/user/' + uid).then(response => {
      if (response.status != 200) window.location = '/Login';
      if(response.data.usertype != 'admin' || response.data.usertype != 'moderator') window.location ='/';
    })
  }

  onChangeName = event => {
    this.setState({ courseName: event.target.value });
  };

  onChangeEnrolmentKey = event => {
    this.setState({ enrolmentKey: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    Axios.post('http://localhost:5000/api/course', {
      coursename: this.state.courseName,
      units: 'New course',
      enrollmentkey: this.state.enrolmentKey
    }).then(response => {
      if (response.status == 200) {
        NotificationManager.info("Unit added !");
      } else {
        NotificationManager.error("Error !");
      }
    }).catch(e => {
      NotificationManager.error(e);
    });
  }

  render() {
    const classes = useStyles;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Course
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="courseName"
              label="Course Name"
              name="courseName"
              autoFocus
              onChange={this.onChangeName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="enrolmentKey"
              label="Enrolment Key"
              id="enrolmentKey"
              autoComplete="current-password"
              onChange={this.onChangeEnrolmentKey}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={this.onSubmit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add Course
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
      </Container>
    );
  }
}

export default AddCourse;
