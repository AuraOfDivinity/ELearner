import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Axios from "axios";

class CourseProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCourse: "",
      units: [],
      questions: [],
      courseid: this.props.match.params.id
    };
  }
  mount() {
    Axios.get('http://localhost:5000/api/units/' + this.state.courseid).then(response => {
      this.setState({
        units: response.data
      });
    });
  }

  componentDidMount() {
    const uid = localStorage.getItem('uid');
    console.log(uid);
    Axios.get('http://localhost:5000/api/user/' + uid).then(response => {
      if (response.status != 200) window.location = '/Login';
    }).catch(e=>{
      window.location = '/Login';
    })
    this.mount();
  }

  getquestions(unitid) {
    Axios.get('http://localhost:5000/api/quiz/' + this.state.courseid + '/' + unitid).then(response => {
      console.log(response.data);
      this.setState({
        questions : unitid + response.data
      })
    }).catch(e => {
      console.log(e)
    })
  }

  handleDeleteUnitClick = (id) => { };

  render() {
    return (
      <Card style={{ margin: "20px", fontFamily: "Lato" }}>
        <CardMedia
          component="img"
          alt="Course Profile Image"
          height="140"
          image="https://www.diocesecpa.org/blog/wp-content/uploads/2018/12/lab-test-experiment-ss-1920.jpg"
          title="Course Profile Image"
        />
        <CardContent>
          {this.state.units.map(currentUnit => {
            return (
              <div>
                <Typography gutterBottom variant="h5" component="h2">
                  Unit ID : {currentUnit.unitid} <br />
                  Unit Name : {currentUnit.details.unitName} <br />
                </Typography>
                <Link to={`/AddQuestion/${this.state.courseid}/${currentUnit.unitid}`}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: "10px" }}
                  >
                    Add Unit Questions
                    </Button>
                </Link>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => this.handleDeleteClick(currentUnit.unitid)}
                  style={{ margin: "10px" }}
                >
                  Delete Unit
                  </Button>
              </div>
            );
          })}
        </CardContent>
      </Card>
    );
  }
}

export default CourseProfile;
