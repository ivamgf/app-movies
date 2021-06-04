import React, { Component }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" type="button" onClick={() => router.push('/movie/Movie')}>
        Learn More
      </Button>
    </div>
    
  )
}