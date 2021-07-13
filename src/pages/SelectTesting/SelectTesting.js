import React, { useState } from 'react';
import { Typography, Box, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';

const options = [
  {
    label: 'Example 1',
    value: 123456789,
  },
  {
    label: 'Example 2',
    value: 987654321,
  },
];

const SelectTesting = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Select Testing
      </Typography>

      <FormControl variant="outlined" fullWidth>
        <InputLabel id="selectedOptionLabel">Select an Option</InputLabel>
        <Select
          labelId="selectedOptionLabel"
          id="selectedOption"
          value={value}
          onChange={handleChange}
          label="Select an Option"
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectTesting;
