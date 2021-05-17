import { AppBar, Toolbar, Typography, makeStyles, IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  heading: {
    textDecoration: 'none',
    flexGrow: 1,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  container: {
    '& > *:not(:first-child)': {
      marginLeft: theme.spacing(1),
    },
  },
  menuButton: {
    marginRight: 36,
  },
}));

export default function Header({ toggleNav = () => {} }) {
  const classes = useStyles();

  const toggleDrawer = () => {
    toggleNav();
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.container}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            className={classes.menuButton}
          >
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
            App Home
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </>
  );
}

Header.propTypes = {
  toggleNav: PropTypes.func,
};
