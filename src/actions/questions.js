import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { saveQuestion, saveQuestionAnswer } from '../utils/api';

export const LOAD_QUESTIONS = 'LOAD_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export const receiveQuestions = (questions) => ({
  type: LOAD_QUESTIONS,
  questions,
});

const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question,
});

const answerQuestion = (newUser, newQuestion) => ({
  type: ANSWER_QUESTION,
  newUser,
  newQuestion,
});

export const handleSubmitQuestion = (optionOneText, optionTwoText) => (
  dispatch,
  getState
) => {
  const { authedUser } = getState();

  dispatch(showLoading());
  return saveQuestion({ optionOneText, optionTwoText, author: authedUser })
    .then((question) => dispatch(addQuestion(question)))
    .then(() => dispatch(hideLoading()));
};

export const handleAnswerQuestion = (questionId, answer) => (
  dispatch,
  getState
) => {
  const { authedUser, users, questions } = getState();

  const newUser = {
    ...users[authedUser],
    answers: {
      ...users[authedUser].answers,
      [questionId]: answer,
    },
  };

  const newQuestion = {
    ...questions[questionId],
    [answer]: {
      ...questions[questionId][answer],
      votes: questions[questionId][answer].votes.concat([authedUser]),
    },
  };

  dispatch(showLoading());
  return saveQuestionAnswer({ authedUser, qid: questionId, answer })
    .then(() => dispatch(answerQuestion(newUser, newQuestion)))
    .then(() => dispatch(hideLoading()));
};
