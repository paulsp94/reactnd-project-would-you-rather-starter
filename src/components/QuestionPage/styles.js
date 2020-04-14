import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  centering: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  root: {
    width: 500,
    margin: '24px 0',
  },
  title: {
    fontSize: 14,
  },
  body: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    '& .MuiButton-root': {
      flex: '1 1 0px',
      padding: '10px 20px',
      margin: 5,
      fontWeight: 'bold',
    },
  },
  or: {
    position: 'absolute',
    background: 'black',
    color: 'rgba(255, 255, 255, 0.75)',
    width: 24,
    height: 24,
    borderRadius: 24,
    textAlign: 'center',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
  },
  blueLeft: (props) => ({
    background:
      props.answer === 'optionOne'
        ? 'linear-gradient(225deg, #3f51b5 30%, #21CBF3 90%)'
        : 'rgba(246,247,255,1)',
    boxShadow:
      props.answer === 'optionOne' && '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: props.answer === 'optionOne' ? 'white' : 'grey',
    textShadow: props.answer === 'optionOne' && '#3f51b5 0 0 5px',
  }),
  blueRight: (props) => ({
    background:
      props.answer === 'optionTwo'
        ? 'linear-gradient(45deg, #3f51b5 30%, #21CBF3 90%)'
        : 'rgba(246,247,255,1)',
    boxShadow:
      props.answer === 'optionTwo' && '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: props.answer === 'optionTwo' ? 'white' : 'grey',
    textShadow: props.answer === 'optionTwo' && '#3f51b5 0 0 5px',
  }),
});
