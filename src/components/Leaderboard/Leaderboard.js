import React from 'react';
import { useSelector } from 'react-redux';
import {
  Avatar,
  TableContainer,
  TableHead,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from '@material-ui/core';
import { useStyles } from './styles';

export const Leaderboard = () => {
  const classes = useStyles();
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);

  const sortable = Object.values(users);

  sortable.sort(
    (a, b) =>
      b.questions.length +
      Object.keys(b.answers).length -
      (a.questions.length + Object.keys(a.answers).length)
  );

  return (
    <div className={classes.wrapper}>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Leaderboard</TableCell>
              <TableCell align="left">User</TableCell>
              <TableCell align="right">Questions asked</TableCell>
              <TableCell align="right">Questions answered</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortable.map((user, index) => (
              <TableRow key={user.name} selected={user.id === authedUser}>
                <TableCell component="th" scope="user">
                  {index + 1}
                </TableCell>
                <TableCell align="left" className={classes.userCell}>
                  <Avatar alt={user.name} src={user.avatarURL} /> {user.name}
                </TableCell>
                <TableCell align="right">{user.questions.length}</TableCell>
                <TableCell align="right">
                  {Object.keys(user.answers).length}
                </TableCell>
                <TableCell align="right">
                  {Object.keys(user.answers).length + user.questions.length}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
