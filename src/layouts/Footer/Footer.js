import { Typography, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  );
}
