import React, { Component }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import ImgMovie1 from '../../../public/assets/images/avengers.jpg';
import ImgMovie2 from '../../../public/assets/images/back.jpeg';
import ImgMovie3 from '../../../public/assets/images/starwars9.jpeg';

const useStyles = makeStyles({
  root: {    
    textAlign: 'center',
    flexBasis: '10.33%',
    flexShrink: 0,              
  },
  cards: {
    maxWidth: 245,
    marginBottom: '5%',
    marginLeft: '5%',
    position: 'relative',    
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        
    },
    cardArea: {
        float: 'left',
    }, 
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>  
        <h1>Movies</h1>        
        <Card className={classes.cards}>
        <CardActionArea>
            <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image={ImgMovie1}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Great Movie Classics.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Discover here the great classics of world cinema. 
                Check out the poster and synopsis of great movies.
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>
        <Card className={classes.cards}>
        <CardActionArea>
            <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image={ImgMovie2}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Great Movie Classics.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Discover here the great classics of world cinema. 
                Check out the poster and synopsis of great movies.
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>
        <Card className={classes.cards}>
        <CardActionArea>
            <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image={ImgMovie3}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Great Movie Classics.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Discover here the great classics of world cinema. 
                Check out the poster and synopsis of great movies.
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>        
    </Container>
  );
}