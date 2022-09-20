import React from 'react';
import { render, screen } from '@testing-library/react';
import { User } from './User';

test('fetch friends', async () => {
  const { findByText } = render(<User />);
  expect(await findByText('friend1')).toBeInTheDocument()
  expect(await findByText('friend2')).toBeInTheDocument()
});
