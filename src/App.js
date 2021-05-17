import { useState } from 'react';
import { makeStyles, Container } from '@material-ui/core';
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
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleSetOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <Header toggleNav={handleSetOpen} />
      <Sidebar open={open} />
      <main className={classes.main}>
        <div className={classes.toolbar} />
        <Container maxWidth="md">
          <Routes />
        </Container>
        <Footer />
      </main>
    </div>
  );
}

export default App;
