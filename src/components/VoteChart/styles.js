import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  chartWrapper: {
    width: '100%',
    height: 100,
  },
  '@keyframes expand': {
    from: { width: 0 },
    to: { width: '100%' },
  },
  chart: {
    overflow: 'hidden',
    width: '0%',
    animation: '$expand 1.5s ease forwards',
  },
  block: {
    display: 'block',
    height: 50,
    color: (props) => props.color,
    fontSize: '.75em',
    fontWeight: 'bold',
    float: 'left',
    background: (props) => props.background,
    position: 'relative',
    overflow: 'hidden',
    opacity: 1,
    transition: 'opacity, .3s ease',
    cursor: 'pointer',
    '& :hover': {
      opacity: '.65',
    },
    width: (props) => `${props.percent}%`,
  },
  value: {
    display: 'block',
    lineHeight: '1em',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});
