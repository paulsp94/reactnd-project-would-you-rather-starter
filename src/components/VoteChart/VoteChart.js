import React from 'react';

import { useStyles } from './styles';

const ChartBlock = (props) => {
  const { option, ...other } = props;
  const classes = useStyles(option);
  return <span className={classes.block} {...other} />;
};

const formatLabel = ({ percent, label }) => `${Math.round(percent)}% ${label}`;

export const VoteChart = ({ data }) => {
  const classes = useStyles();
  const { optionOne, optionTwo } = data;

  return (
    <div className={classes.chartWrapper}>
      <h6>Answers</h6>
      <div className={classes.chart}>
        <ChartBlock option={optionOne} title="Category A">
          <span className={classes.value}>{formatLabel(optionOne)}</span>
        </ChartBlock>
        <ChartBlock option={optionTwo} title="Category B">
          <span className={classes.value}>{formatLabel(optionTwo)}</span>
        </ChartBlock>
      </div>
    </div>
  );
};
