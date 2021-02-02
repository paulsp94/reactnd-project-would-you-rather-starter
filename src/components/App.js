import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoadingBar } from 'react-redux-loading-bar';
import { Container, makeStyles } from '@material-ui/core';

import { handleInitialData } from '../actions/shared';
import { Nav } from './Nav';
import { Login } from './Login';
import { QuestionPage } from './QuestionPage';
import { AddQuestion } from './AddQuestion';
import { Leaderboard } from './Leaderboard';
import { Questions } from './Questions';
import { ProtectedRoute } from './ProtectedRoute';
import background from '../assets/background.png';
import { PageNotFound } from './PageNotFound';

const useStyles = makeStyles((theme) => ({
  background: {
    background: `url(${background}) 50% 50% no-repeat`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    width: '100vw',
    overflow: 'scroll',
  },
  container: {
    '& > div': {
      minHeight: '100vh',
      paddingTop: 64,
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <LoadingBar />
      <Nav />
      <div className={classes.background}>
        <Container className={classes.container}>
          <Switch>
            <Route path="/login" exact component={Login} />
            <ProtectedRoute
              path="/question/:question_id"
              exact
              component={QuestionPage}
            />
            <ProtectedRoute path="/add" exact component={AddQuestion} />
            <ProtectedRoute path="/leaderboard" exact component={Leaderboard} />
            <ProtectedRoute path="/" exact component={Questions} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
};
export default App;
