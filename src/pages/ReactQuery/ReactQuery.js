import React from 'react';
import useGetStarWarsCharacters from 'hooks/useGetStarWarsCharacters';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    height: '100%',
  },
});

const ReactQuery = () => {
  const classes = useStyles();
  const { data, status } = useGetStarWarsCharacters();

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error :(</p>;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        React Query Examples
      </Typography>
      <Grid container spacing={2}>
        {data &&
          data.results.map((char) => {
            return (
              <Grid item xs={12} sm={3} key={char.name}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {char.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default ReactQuery;
