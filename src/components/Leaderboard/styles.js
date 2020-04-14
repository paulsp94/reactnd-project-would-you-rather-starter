import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
  },
  tableContainer: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  table: {
    minWidth: 650,
  },
  userCell: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    '& .MuiAvatar-root': {
      marginRight: 10,
    },
  },
});
