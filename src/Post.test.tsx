import React from 'react';
import { render } from '@testing-library/react';
import { Post } from './Post';

test('fetch friends', async () => {
  const { findByText } = render(<Post />);
  expect(await findByText('My first post')).toBeInTheDocument()
  expect(await findByText('My second post')).toBeInTheDocument()
});
