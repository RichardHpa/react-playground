import React from 'react';
import { Tab, Tabs, Divider, Box, Typography } from '@material-ui/core';

const tabs = [
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

const RandomCoding = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Random Code
      </Typography>

      <Box mb={2}>
        <Tabs
          indicatorColor="primary"
          scrollButtons="auto"
          textColor="primary"
          value={0}
          variant="scrollable"
        >
          {tabs.map((tab) => (
            <Tab key={tab.value} label={tab.label} />
          ))}
        </Tabs>
        <Divider />
      </Box>
    </Box>
  );
};

export default RandomCoding;
