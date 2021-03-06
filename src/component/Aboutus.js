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

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

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

const cards = [1, 2, 3];

export default function Home() {
  const classes = useStyles();

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
            >
             About E-learner
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
             Our Vision & Mission - අපේ දැක්ම
            </Typography>
            <div className={classes.heroButtons}>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link to="/aboutus">
                    <Button variant="contained" color="primary">
                      About Us
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/contactus">
                    <Button variant="outlined" color="primary">
                      Contact Us
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
            </div>
          </Container>
        </div>
        
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>
           
              <Grid item  xs={1000} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://www.nebraskapta.org/s/cc_images/teaserbox_954157418.jpg?t=1538582346"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Elearning Online
                    </Typography>
                    <Typography>
                    We provide the platform and the tools to teach and learn whatever that is in demand to make a better tomorrow.
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Grid>
              <Grid item  xs={1000} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://www.datocms-assets.com/7756/1555405528-achievementcv.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                   
                      A Oasis for Achievement
                    </Typography>
                    <Typography>
                    provides you all the opportunities to take the next step in your life. Whether you are advancing in your career or going at it by yourself, the knowledge you gather here will immensely help you to achieve your goals
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Grid>
              <Grid item  xs={1000} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="http://www.ngopulse.org/sites/default/files/styles/article-top-image-w320/public/image/images/student-education.jpg?itok=UtL0WKTG"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                   
                    Education
                    </Typography>
                    <Typography>
                    To provide access to the wealth of knowledge embedded in the extraordinary minds of each other.
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Grid>
          
          
          </Grid>
          
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
         Elearning
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
      Team Exception
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
