import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { PostRedux } from './PostRedux';
import { Provider } from "react-redux"
import { store } from '../../app/store';

test('fetch friends', async () => {
  const { findByText } = render(<Provider store={store}><PostRedux /></Provider>);
  waitFor(() => {
    expect(findByText('My first post')).toBeInTheDocument()
    expect(findByText('My second post')).toBeInTheDocument()
  })
});
