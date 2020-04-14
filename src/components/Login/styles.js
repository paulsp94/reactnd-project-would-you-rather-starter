import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '48px 64px',
    borderRadius: 8,
    background: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 20px -5px',
    minWidth: '300px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  buttonStyles: {
    background: 'linear-gradient(45deg, #3f51b5 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    border: 0,
    borderRadius: 4,
    margin: 8,
    color: 'white',
    padding: '0 30px',
    height: 48,
  },
}));
