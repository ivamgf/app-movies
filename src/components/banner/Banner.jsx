import React, { Component }  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Poster2 from '../../components/poster/Poster2';

const useStyles = makeStyles((theme) => ({
    heading1: {
      fontSize: theme.typography.pxToRem(35),
      textAlign: 'center',
      flexBasis: '10.33%',
      flexShrink: 0,
      color: '#000',
      fontWeight: 'bold',
    },
    heading2: {
        fontSize: theme.typography.pxToRem(25),
        textAlign: 'center',
        flexBasis: '10.33%',
        flexShrink: 0,
        color: '#000',
    },
    heading: {
        textAlign: 'center',
        flexBasis: '10.33%',
        flexShrink: 0,
    }
}));

export default function SimpleContainer() {
    const classes = useStyles();

    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" className={classes.heading}>
            <h1 className={classes.heading1}>The Great Cinema Classics!</h1>  
            <Poster2 />
            <h3 className={classes.heading2}>Check out the synopses of great movies from the world cinema.</h3>
        </Container>
        </React.Fragment>
    );
}