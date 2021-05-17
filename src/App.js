import { useState, useEffect } from 'react';
import { makeStyles, Container, useTheme, useMediaQuery } from '@material-ui/core';
import { useAuth } from 'context/AuthenticationContext';
import clsx from 'clsx';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Sidebar from './layouts/Sidebar';
import Routes from './Routes';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  main: {
    flexGrow: 1,
    paddingTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.paper,
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
    minHeight: 112,
  },
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const { user } = useAuth();
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
      <main className={classes.main}>
        <div className={clsx(classes.toolbar, { [classes.isLoggedIn]: Boolean(user) })} />
        <Container maxWidth="md">
          <Routes />
        </Container>
        <Footer />
      </main>
    </div>
  );
}

export default App;
