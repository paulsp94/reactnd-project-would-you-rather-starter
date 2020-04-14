import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Paper,
  Input,
  CardActions,
  Button,
  Divider,
} from '@material-ui/core';

import { useStyles } from './styles';
import { handleSubmitQuestion } from '../../actions/questions';

export const AddQuestion = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submitQuestion = () => {
    dispatch(handleSubmitQuestion(optionOne, optionTwo));
    setSubmitted(true);
  };

  const handleChange = ({ target }) =>
    target.id === 'one'
      ? setOptionOne(target.value)
      : setOptionTwo(target.value);

  return submitted ? (
    <Redirect to="/" />
  ) : (
    <div className={classes.wrapper}>
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
            <Paper className={classes.blueLeft}>
              <Input value={optionOne} onChange={handleChange} id="one" />
            </Paper>
            <div className={classes.or}>or</div>
            <Paper className={classes.blueRight}>
              <Input value={optionTwo} onChange={handleChange} id="two" />
            </Paper>
          </Typography>
        </CardContent>
        <Divider />
        <CardActions>
          <Button size="small" onClick={submitQuestion}>
            Submit question
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
