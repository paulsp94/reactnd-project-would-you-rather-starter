import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  username: {
    margin: 'auto 0',
  },
  active: {
    fontWeight: 'bold',
  },
  nav: {
    paddingRight: 100,
    '& > ul': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      margin: 'auto 0',
    },
    '& > ul > li': {
      listStyleType: 'none',
      padding: '10px',
    },
    '& > ul > li > button': { padding: 0 },
    '& > ul > li > button > span > a': {
      textDecoration: 'none',
      color: 'white',
    },
  },
}));
