/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import ThreeDotsMenu from './ThreeDotsMenu';

describe('test ThreeDotsMenu', () => {
  test('render component ThreeDotsMenu', async () => {
    let root;
    act(() => {
      root = create(
        <Router>
          <ThreeDotsMenu />
        </Router>,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
});
