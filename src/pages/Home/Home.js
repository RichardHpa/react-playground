import { makeStyles, Paper, Button, Grid } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

const buttons = [
  { label: 'React Scroll', to: '/scroll' },
  { label: 'React Query', to: '/react-query' },
];

export default function Home() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        {buttons.map((button) => (
          <Grid item key={button.label}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={RouterLink}
              to={button.to}
            >
              {button.label}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
