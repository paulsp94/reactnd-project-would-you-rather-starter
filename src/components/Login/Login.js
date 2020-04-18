import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormControl, Select, MenuItem, Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

import { useStyles } from './styles';
import { loginAuthedUser } from '../../actions/authedUser';

export const Login = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users) || [];
  const authedUser = useSelector((state) => state.authedUser);
  const [user, setUser] = useState(authedUser || '');
  const previous = props.location.state.from || '/';

  const handleChange = ({ target }) => setUser(target.value);
  const handleLogin = () => {
    dispatch(loginAuthedUser(user));
  };

  return !!authedUser ? (
    <Redirect to={previous} />
  ) : (
    <div className={classes.root}>
      <div className={classes.formWrapper}>
        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            value={user}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="" disabled>
              Select user to log in!
            </MenuItem>
            {Object.values(users).map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          disabled={user === ''}
          className={classes.buttonStyles}
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
    </div>
  );
};
