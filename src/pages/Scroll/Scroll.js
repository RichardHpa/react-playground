import { useState } from 'react';
import { Box, AppBar, Tabs, Tab, makeStyles, Paper, Typography } from '@material-ui/core';
import Lorem from 'components/Lorem';
import { Link, Element } from 'react-scroll';
import { useAuth } from 'context/AuthenticationContext';

const useStyles = makeStyles(() => ({
  stickyAppBar: {
    top: '-20px',
  },
  indicator: {
    height: 5,
  },
}));

const tabs = [
  { label: 'Item One', key: 'item-One' },
  { label: 'Item Two', key: 'item-Two' },
  { label: 'Item Three', key: 'item-Three' },
  { label: 'Base Level' },
  { label: 'Product Hierarchy' },
  { label: 'Packaging' },
  { label: 'Logistics' },
  { label: 'Pallet' },
  { label: 'Dates' },
  { label: 'Declarations' },
  { label: 'Instructions' },
  { label: 'Marketing' },
  { label: 'Communications' },
];

const Scroll = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(false);
  const { user } = useAuth();

  const offset = user ? 64 * 3 : 64 * 2;

  const handleOnSetActive = (e) => {
    setActiveTab(e);
  };

  const handleOnSetInActive = (e) => {
    if (e === activeTab) {
      setActiveTab(false);
    }
  };

  return (
    <Box>
      <Lorem />
      <AppBar position="sticky" color="secondary" className={classes.stickyAppBar}>
        <Tabs
          aria-label="simple tabs example"
          indicatorColor="primary"
          value={activeTab}
          classes={{
            indicator: classes.indicator,
          }}
        >
          {tabs.map((tab) => {
            return (
              <Tab
                key={tab.key}
                value={tab.key}
                label={tab.label}
                component={Link}
                spy
                isDynamic
                smooth
                duration={500}
                to={tab.key}
                offset={-Math.abs(offset)}
                activeClass="active"
                onSetActive={handleOnSetActive}
                onSetInactive={handleOnSetInActive}
                containerId="layoutContent"
              />
            );
          })}
        </Tabs>
      </AppBar>

      <Box py={2} component={Element} name="item-One">
        <Paper elevation={4}>
          <Box p={2}>
            <Typography variant="h4" gutterBottom>
              Item One
            </Typography>
            {[...Array(2)].map((e, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Lorem key={`item-one-${i}`} />
            ))}
          </Box>
        </Paper>
      </Box>

      <Box py={2} component={Element} name="item-Two">
        <Paper elevation={4}>
          <Box p={2}>
            <Typography variant="h4" gutterBottom>
              Item Two
            </Typography>
            {[...Array(2)].map((e, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Lorem key={`item-two-${i}`} />
            ))}
          </Box>
        </Paper>
      </Box>

      <Box py={2} component={Element} name="item-Three">
        <Paper elevation={4}>
          <Box p={2}>
            <Typography variant="h4" gutterBottom>
              Item Three
            </Typography>
            {[...Array(2)].map((e, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Lorem key={`item-three-${i}`} />
            ))}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Scroll;
