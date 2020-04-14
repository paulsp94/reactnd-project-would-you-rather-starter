import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    width: 500,
  },
  centering: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  appBar: {
    width: 500,
    top: 128,
    left: '50%',
    translate: '-50%',
  },
  scrollView: {
    marginTop: 128,
  },
  link: {
    textDecoration: 'none',
  },
});

export const a11yProps = (index) => ({
  id: `full-width-tab-${index}`,
  'aria-controls': `full-width-tabpanel-${index}`,
});

export const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </Typography>
  );
};
