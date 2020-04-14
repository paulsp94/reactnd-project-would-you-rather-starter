import { LOAD_USERS } from '../actions/users';
import { ANSWER_QUESTION, ADD_QUESTION } from '../actions/questions';

export const users = (state = {}, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return action.users;
    case ADD_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: [...state[question.author].questions, question.id],
        },
      };
    case ANSWER_QUESTION:
      const { newUser } = action;
      return { ...state, [newUser.id]: newUser };
    default:
      return state;
  }
};
