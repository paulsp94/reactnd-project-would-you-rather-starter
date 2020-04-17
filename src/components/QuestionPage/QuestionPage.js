import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
  Button,
} from '@material-ui/core';
import moment from 'moment';

import { useStyles } from './styles';
import { makeChartData } from './utils';
import { VoteChart } from '../VoteChart';
import { handleAnswerQuestion } from '../../actions/questions';
import { Redirect } from 'react-router-dom';

export const QuestionPage = (props) => {
  const { question_id } = props.match.params;
  const dispatch = useDispatch();
  const question = useSelector((state) => state.questions[question_id]);
  const author = useSelector((state) => state.users[question.author]);
  const answer = useSelector(
    (state) => state.users[state.authedUser].answers[question.id]
  );
  const chartData = makeChartData(question, answer);
  const classes = useStyles({ answer });

  const handleVote = ({ target }) =>
    !answer &&
    dispatch(
      handleAnswerQuestion(question_id, target.id || target.offsetParent.id)
    );

  return (
    <div className={classes.centering}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="Author"
              src={author.avatarURL}
              alt={author.name}
            />
          }
          title={
            <Typography variant="h5" component="h2">
              Would you rather ...
            </Typography>
          }
          subheader={
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Question asked:{' '}
              {moment(question.timestamp).format('Do MMM. YYYY')}
            </Typography>
          }
        />
        <CardContent>
          <Typography variant="body2" component="div" className={classes.body}>
            <Button
              className={classes.blueLeft}
              variant="contained"
              onClick={handleVote}
              id="optionOne"
            >
              {question.optionOne.text}
            </Button>
            <div className={classes.or}>or</div>
            <Button
              className={classes.blueRight}
              variant="contained"
              onClick={handleVote}
              id="optionTwo"
            >
              {question.optionTwo.text}
            </Button>
          </Typography>
          {answer && <VoteChart data={chartData} />}
        </CardContent>
      </Card>
    </div>
  );
};
