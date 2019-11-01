import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
class CourseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
}
componentDidMount(){
  const uid = localStorage.getItem('uid');
  console.log(uid);
  Axios.get('http://localhost:5000/api/user/' + uid).then(response => {
    if (response.status != 200) window.location = '/Login';
  }).catch(e=>{
    window.location = '/Login';
  })
}

  render() {
    const classes = useStyles;
  return (
    
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Course Details
      </Typography>
      
      <Grid container spacing={3}>
    
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="courseName"
            onChange={val => localStorage.setItem("courseName", val)}
            name="courseName"
            label="Course Name"
            fullWidth
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            required
            onChange={val => localStorage.setItem("courseId", val)}
            id="courseId"
            name="Course Id"
            label="Course ID"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            onChange={val => localStorage.setItem("nUnits", val)}
            id="numberOfUnits"
            name="numberOfUnits"
            label="Number Of Units/lessons"
            fullWidth
          />
        </Grid>
        
      </Grid>
      
    </React.Fragment>
  );
  }
}

export default CourseDetails;