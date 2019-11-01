import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Axios from "axios";
import MainQuizComponent from '../QuizComponent/MainQuizComponent'

class StudentCourseDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCourse: "",
      units: ["unit1", "unit2", "unit3", "unit4", "unit5"]
    };
  }

  componentDidMount() {
    const uid = localStorage.getItem('uid');
    console.log(uid);
    Axios.get('http://localhost:5000/api/user/' + uid).then(response => {
      if (response.status != 200) window.location = '/Login';
    }).catch(e=>{
      window.location = '/Login';
    })
  }

  render() {
    return (
      <Card style={{ margin: "20px", fontFamily: "Lato" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Course Profile Image"
            height="140"
            image="https://www.diocesecpa.org/blog/wp-content/uploads/2018/12/lab-test-experiment-ss-1920.jpg"
            title="Course Profile Image"
          />
          <CardContent>
            {this.state.units.map((currentUnit, index) => {
              return (
                <div>
                  <Typography gutterBottom variant="h5" component="h2">
                    {currentUnit}
                  </Typography>
                  <Link to="/AddQuestion">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleEditClick}
                      style={{ margin: "10px" }}
                    >
                      Next Unit
                    </Button>
                  </Link>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.handleDeleteClick}
                    style={{ margin: "10px" }}
                  >
                    Previous Unit
                  </Button>
                </div>
                
              );
            })}
          </CardContent>
        </CardActionArea>
        <MainQuizComponent></MainQuizComponent>
      </Card>
      
    );
  }
}

export default StudentCourseDetails;
