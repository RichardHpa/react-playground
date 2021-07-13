import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SelectTesting from '.';

describe('SelectComponent', () => {
  it('value should be 123456789', async () => {
    render(<SelectTesting />);
    const select = await screen.findByLabelText(/^select an option/i);
    userEvent.click(select);
    const option = await screen.findByRole('option', { name: /^example 1/i });
    userEvent.click(option);

    // want to check to see if value is 123456789
  });
});
