import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Axios from "axios";
import { borderRadius } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

class AllCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
  }


  handleDeleteClick = (id) => {
    Axios.delete('http://localhost:5000/api/course/' + id).then(response => {
      console.log(response);
      this.mount();
    })
  };

  mount() {
    Axios.get('http://localhost:5000/api/course').then(response => {
      this.setState({
        courses: response.data
      })
      console.log(this.state.courses);
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

  render() {
    const classes = useStyles;

    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              ><br/>
              <h2 style={{backgroundColor:'#c2ebff', borderRadius: '10px'}}>
                All Available Courses
                </h2>
              </Typography>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {this.state.courses.map(card => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.data.coursename}
                      </Typography>
                      <Typography>{card.data.units}</Typography>
                    </CardContent>
                    <CardActions>
                      <Link to={`/CourseProfile/${card.id}`}>
                        <Button
                          size="small"
                          color="primary"

                        >
                          View Course
                        </Button>
                      </Link>
                      <Button
                        size="small"
                        color="danger"
                        onClick={() => this.handleDeleteClick(card.id)}
                      >
                        Delete Course
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
              <div style={{margin: 'auto'}}>
              <Link to="./AddCourse/">
          <Button size="large" color="primary" variant="contained">
                Add Course
          </Button>
          </Link>
          </div>
            </Grid>
            
          </Container>
          
        </main>
      </React.Fragment>
    );
  }
}

export default AllCourses;
