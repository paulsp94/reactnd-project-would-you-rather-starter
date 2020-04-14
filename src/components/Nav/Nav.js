import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core';

import { logoutAuthedUser } from '../../actions/authedUser';
import { useStyles } from './styles';

export const Nav = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);
  const user = useSelector((state) => state.users[authedUser]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = !!anchorEl;

  const handleMenu = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    dispatch(logoutAuthedUser());
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Would you rather ...
          </Typography>
          {authedUser && (
            <>
              <nav className={classes.nav}>
                <ul>
                  <li>
                    <Button>
                      <NavLink
                        to="/leaderboard"
                        activeClassName={classes.active}
                      >
                        Leaderboard
                      </NavLink>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <NavLink to="/add" activeClassName={classes.active}>
                        Add new question
                      </NavLink>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <NavLink to="/" exact activeClassName={classes.active}>
                        Questions
                      </NavLink>
                    </Button>
                  </li>
                </ul>
              </nav>
              <div className={classes.user}>
                <Typography variant="subtitle1" className={classes.username}>
                  {user.name}
                </Typography>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Avatar alt={user.name} src={user.avatarURL} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
