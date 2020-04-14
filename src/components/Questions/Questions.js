import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppBar, Tabs, Tab, useTheme } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import { Question } from '../Question';
import { useStyles, a11yProps, TabPanel } from './styles';

const sortByDate = (a, b) => b.timestamp - a.timestamp;

export const Questions = () => {
  const classes = useStyles();
  const questions = useSelector((state) => state.questions);
  const user = useSelector((state) => state.users[state.authedUser]);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const answeredQuestions = Object.keys(user.answers)
    .map((key) => questions[key])
    .sort(sortByDate);
  const unansweredQuestions = Object.values(questions)
    .filter((question) => !Object.keys(user.answers).includes(question.id))
    .sort(sortByDate);

  const handleChange = (event, newValue) => setValue(newValue);

  const handleChangeIndex = (index) => setValue(index);

  return (
    <div className={classes.centering}>
      <div className={classes.root}>
        <AppBar position="fixed" color="default" className={classes.appBar}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Unanswered questions" {...a11yProps(0)} />
            <Tab label="Answered questions" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
          className={classes.scrollView}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className={classes.centering}>
              {unansweredQuestions.map((question) => (
                <Link to={`/question/${question.id}`} className={classes.link}>
                  <Question key={question.id} question={question} />
                </Link>
              ))}
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className={classes.centering}>
              {answeredQuestions.map((question) => (
                <Link to={`/question/${question.id}`} className={classes.link}>
                  <Question key={question.id} question={question} />
                </Link>
              ))}
            </div>
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
};
