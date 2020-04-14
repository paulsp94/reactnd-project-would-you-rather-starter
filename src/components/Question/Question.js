import React from 'react';
import { Card, CardContent, Typography, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { useStyles } from './styles';

export const Question = ({ question }) => {
  const answer = useSelector(
    (state) => state.users[state.authedUser].answers[question.id]
  );
  const classes = useStyles({ answer });

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Question
        </Typography>
        <Typography className={classes.pos} variant="h5" component="h2">
          Would you rather ...
        </Typography>
        <Typography variant="body2" component="div" className={classes.body}>
          <Paper className={classes.blueLeft}>{question.optionOne.text}</Paper>
          <div className={classes.or}>or</div>
          <Paper className={classes.blueRight}>{question.optionTwo.text}</Paper>
        </Typography>
      </CardContent>
    </Card>
  );
};
