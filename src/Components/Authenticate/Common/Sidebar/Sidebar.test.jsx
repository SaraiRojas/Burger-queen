/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import Sidebar from './Sidebar';

describe('test Sidebar', () => {
  test('render component Sidebar', async () => {
    let root;
    const mockAuthenticate = jest.fn();
    act(() => {
      root = create(
        <Router>
          <Sidebar authenticate={mockAuthenticate} />
        </Router>,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
});
