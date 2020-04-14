import {
  LOAD_QUESTIONS,
  ADD_QUESTION,
  ANSWER_QUESTION,
} from '../actions/questions';

export const questions = (state = {}, action) => {
  switch (action.type) {
    case LOAD_QUESTIONS:
      return action.questions;
    case ADD_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: action.question,
      };
    case ANSWER_QUESTION:
      const { newQuestion } = action;
      return { ...state, [newQuestion.id]: newQuestion };
    default:
      return state;
  }
};
