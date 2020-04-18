import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const authedUser = useSelector((state) => state.authedUser);
  const validQuestions = useSelector((state) => Object.keys(state.questions));

  const { question_id } = rest.computedMatch.params;

  if (
    question_id !== undefined &&
    !validQuestions.includes(question_id) &&
    authedUser !== null
  ) {
    return <Redirect to="/questionNotFound" />;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        authedUser !== null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
