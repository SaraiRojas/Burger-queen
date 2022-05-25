/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import Menu from './Menu';

describe('test Menu', () => {
  test('render component Menu', async () => {
    let root;
    act(() => {
      root = create(
        <Router>
          <Menu />
        </Router>,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
});
