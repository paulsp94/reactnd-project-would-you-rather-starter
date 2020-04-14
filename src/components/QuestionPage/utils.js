export const makeChartData = (question, answer) => {
  const totalAnswers =
    question.optionOne.votes.length + question.optionTwo.votes.length;

  return {
    optionOne: {
      id: `optionOne`,
      label: question.optionOne.text,
      percent: (question.optionOne.votes.length / totalAnswers) * 100,
      total: question.optionOne.votes.length,
      background:
        answer === 'optionOne'
          ? 'linear-gradient(225deg, #3f51b5 30%, #21CBF3 90%)'
          : 'rgba(246,247,255,1)',
      color: answer === 'optionOne' ? 'white' : 'grey',
    },
    optionTwo: {
      id: `optionTwo`,
      label: question.optionTwo.text,
      percent: (question.optionTwo.votes.length / totalAnswers) * 100,
      total: question.optionTwo.votes.length,
      background:
        answer === 'optionTwo'
          ? 'linear-gradient(45deg, #3f51b5 30%, #21CBF3 90%)'
          : 'rgba(246,247,255,1)',
      color: answer === 'optionTwo' ? 'white' : 'grey',
    },
  };
};
