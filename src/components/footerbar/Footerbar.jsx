import React, { Component }  from 'react';
import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        textAlign: 'center',
      },
      backgroundColor: '#000080',
      primary: '#263238',
    },
  }));
  
  export default function GroupOrientation() {
    const classes = useStyles();
    const router = useRouter();
      
    return (
      <div className={classes.root}>
          <Grid container spacing={3}>
              <Grid item xs={12}>
              <ButtonGroup
                      size="small"
                      orientation="vertical"
                      aria-label="vertical contained primary button group"
                      variant="text"
                  >
                      <Button>App Movies Version 2.0.0</Button>
                      <Button onClick={() => router.push('/about/About')}>About</Button>
                  </ButtonGroup>
  
                  <ButtonGroup
                      size="small"
                      orientation="vertical"
                      aria-label="vertical contained primary button group"
                      variant="text"
                  >
                      <Button></Button>
                  </ButtonGroup>
  
                  <ButtonGroup
                      size="small"
                      orientation="vertical"
                      aria-label="vertical contained primary button group"
                      variant="text"
                  >
                      <Button>Powered By React.js</Button>
                      <Button>License By Creative Commons</Button>
                  </ButtonGroup>
              </Grid>
          </Grid>
              
      </div>
    );
  }