import { AppBar, Toolbar, Typography, makeStyles, IconButton, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { useAuth } from 'context/AuthenticationContext';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'white',
  },
  heading: {
    textDecoration: 'none',
    flexGrow: 1,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  mainToolbar: {
    backgroundColor: theme.palette.primary.main,
    '& > *:not(:first-child)': {
      marginLeft: theme.spacing(1),
    },
  },
  userToolbar: {
    backgroundColor: theme.palette.secondary.main,
    minHeight: 48,
  },
}));

export default function Header({ toggleNav = () => {} }) {
  const classes = useStyles();
  const { user, login, logout } = useAuth();

  const toggleDrawer = () => {
    toggleNav();
  };

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        {user && (
          <Toolbar variant="dense" className={classes.userToolbar}>
            <Typography variant="body2" color="inherit" noWrap>
              Hello {user.name}
            </Typography>
          </Toolbar>
        )}
        <Toolbar className={classes.mainToolbar}>
          <IconButton color="inherit" aria-label="open drawer" onClick={toggleDrawer} edge="start">
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.heading}
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/"
          >
            React Playground
          </Typography>
          {user ? (
            <>
              <Typography variant="h6" color="inherit" noWrap>
                Hello {user.name}
              </Typography>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={handleLogin}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </>
  );
}

Header.propTypes = {
  toggleNav: PropTypes.func,
};
