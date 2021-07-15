import { useState, useEffect } from 'react';
import { makeStyles, Container, useTheme, useMediaQuery } from '@material-ui/core';
// import { useAuth } from 'context/AuthenticationContext';
import clsx from 'clsx';
import { useReactOidc } from '@axa-fr/react-oidc-context';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Sidebar from './layouts/Sidebar';
import Routes from './Routes';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  dashboardLayoutWrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    marginTop: '64px',
  },
  dashboardLayoutContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  dashboardLayoutContent: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
    position: 'relative',
    WebkitOverflowScrolling: 'touch',
    paddingTop: '20px',
    //
    display: 'flex',
    flexDirection: 'column',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  isLoggedIn: {
    marginTop: '104px',
    [theme.breakpoints.up('sm')]: {
      marginTop: '112px',
    },
  },
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  // const { user } = useAuth();
  const { oidcUser: user } = useReactOidc();
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (mobileView) {
      setOpen(false);
    }
  }, [mobileView]);

  const handleSetOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <Header toggleNav={handleSetOpen} />
      <Sidebar open={open} toggleNav={handleSetOpen} />
      <div
        className={clsx(classes.dashboardLayoutWrapper, { [classes.isLoggedIn]: Boolean(user) })}
      >
        <div className={classes.dashboardLayoutContainer}>
          <div className={classes.dashboardLayoutContent} id="layoutContent">
            <Container maxWidth="md">
              <Routes />
            </Container>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
