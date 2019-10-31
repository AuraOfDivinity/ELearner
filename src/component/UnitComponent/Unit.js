import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MainQuizComponent from "../QuizComponent/MainQuizComponent";

class Unit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unitContent: [
        {
          title: "Chemistry 1",
          content:
            " Chemistry is a branch of science that involves the study of the composition"
        },
        {
          title: "Chemistry 2",
          content:
            "Chemistry is a branch of science that involves the study of the composition"
        },
        {
          title: "Chemistry 3",
          content:
            "Chemistry is a branch of science that involves the study of the composition"
        }
      ],
      currentUnitNumber: 0
    };
  }
  handleNextClick = () => {
    if (this.state.currentUnitNumber < this.state.unitContent.length - 1) {
      this.setState({
        currentUnitNumber: this.state.currentUnitNumber + 1
      });
    }
  };
  handlePrevClick = () => {
    if (this.state.currentUnitNumber !== 0) {
      this.setState({
        currentUnitNumber: this.state.currentUnitNumber - 1
      });
    }
  };

  render() {
    return (
      <div>
        <Card style={{ margin: "20px", fontFamily: "Lato" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://www.diocesecpa.org/blog/wp-content/uploads/2018/12/lab-test-experiment-ss-1920.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.state.unitContent[this.state.currentUnitNumber].title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.state.unitContent[this.state.currentUnitNumber].content}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" variant="outlined" color="primary" onClick={this.handlePrevClick}>
              Prevoius Unit
            </Button>
            <Button size="small" variant="outlined" color="primary" onClick={this.handleNextClick}>
              Next Unit
            </Button>
          </CardActions>
        </Card>

        <Card style={{ margin: "20px" }}>
          <MainQuizComponent />
        </Card>
      </div>
    );
  }
}

export default Unit;
