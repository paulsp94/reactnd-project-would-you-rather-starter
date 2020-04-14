import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
  },
  root: {
    width: 500,
    margin: 24,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50% ,-50%)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  body: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    '& .MuiPaper-root': {
      flex: '1 1 0px',
      padding: '10px 20px',
      margin: 5,
      color: 'white',
      fontWeight: 'bold',
      textShadow: '#3f51b5 0 0 5px',
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
  },
  blueRight: {
    background: 'linear-gradient(45deg, #3f51b5 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  },
  blueLeft: {
    background: 'linear-gradient(225deg, #3f51b5 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  },
});
