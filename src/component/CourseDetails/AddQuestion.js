import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
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
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

class AddQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      ans1: "",
      ans2: "",
      ans3: "",
      ans4: "",
      answer: "",
      explaination: "",
      courseid: this.props.match.params.courseid,
      unitid: this.props.match.params.unitid
    };
  }

  onChangeQuestion = event => {
    this.setState({ question: event.target.value });
  };

  onChangeAns1 = event => {
    this.setState({ ans1: event.target.value });
  };

  onChangeAns2 = event => {
    this.setState({ ans2: event.target.value });
  };

  onChangeAns3 = event => {
    this.setState({ ans3: event.target.value });
  };

  onChangeAns4 = event => {
    this.setState({ ans4: event.target.value });
  };

  onChangeCorrect = event => {
    this.setState({
      answer: event.target.value
    });
  };

  onChangeExplain = event => {
    this.setState({
      explaination: event.target.value
    });
  };

  componentDidMount() {
    const uid = localStorage.getItem('uid');
    console.log(uid);
    Axios.get('http://localhost:5000/api/user/' + uid).then(response => {
      if (response.status != 200) window.location = '/Login';
    }).catch(e=>{
      window.location = '/Login';
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    Axios.post('http://localhost:5000/api/quiz/' + this.state.courseid + '/' + this.state.unitid, {
      question: this.state.question,
      ans1: this.state.ans1,
      ans2: this.state.ans2,
      ans3: this.state.ans3,
      ans4: this.state.ans4,
      answer: this.state.answer,
      explain: this.state.explaination
    }).then(response => {
      if (response.status == 200)
        NotificationManager.info('Question added to the unit successfully !')
      else
        NotificationManager.error('Could not add question !')
    }).catch(e => {
      NotificationManager.error('Could not add question ! err : ' + e)
    });
  };

  render() {
    const classes = useStyles;
    return (
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.paper}>
          <br />
          <br />
          <Typography component="h1" variant="h5">
            Add New Question
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="fname"
                  name="question"
                  variant="outlined"
                  required
                  fullWidth
                  id="question"
                  label="Question"
                  autoFocus
                  onChange={this.onChangeQuestion}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="ans1"
                  label="Answer 1"
                  name="ans1"
                  onChange={this.onChangeAns1}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="ans2"
                  label="Answer 2"
                  name="ans2"
                  onChange={this.onChangeAns2}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="ans3"
                  label="Answer 3"
                  name="ans3"
                  autoComplete="email"
                  onChange={this.onChangeAns3}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="ans4"
                  label="Answer 4"
                  name="ans4"
                  autoComplete="email"
                  onChange={this.onChangeAns4}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="correctAnswer"
                  label="Correct Answer"
                  id="correctAnswer"
                  onChange={this.onChangeCorrect}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="answerExplaination"
                  label="Correct Answer Explaination"
                  id="answerExplaination"
                  onChange={this.onChangeExplain}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleSubmit}
              style={{ marginTop: "20px" }}
            >
              Submit Question
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

export default AddQuestions;
