import React, { Component }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import ImgProfile from '../../../public/assets/images/dev.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    textAlign: 'center',
    flexBasis: '10.33%',
    flexShrink: 0,
    marginBottom: '5%',
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>  
        <h1>Contact</h1>
        <Card>
        <CardActionArea>
            <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image={ImgProfile}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Developer Profile
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            FrontEnd Developer Analyst with knowledge in Angular 10+, React.js, Next.js, 
            HTML5, CSS3, Sass, Javascript, Typescript, Json, Api REST, Postman, Insomnia, 
            PWA and Visual Studio Code. Graduated in Systems Analysis and Development from 
            University Estácio de Sá, with an MBA in Design Thinking from Uniasselvi College 
            and Master's degree in Knowledge Engineering from Federal University of 
            Santa Catarina (UFSC). SCRUM SFC certification by the international certification 
            body SCRUMStudy. Won the medal of honor for professional merit by the 
            Cedaspy education network in 2011. He is also the author of the book 
            “Cognitive and Learning Styles” by the German publisher NEA and 
            “Creativity and Innovation: Enter the Age of Startups” by the publisher 
            Casa do Código. He is currently among the 4% most experienced developers 
            in the world according to CodersRank.io.
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>            
        </CardActions>
        </Card>
    </Container>
  );
}