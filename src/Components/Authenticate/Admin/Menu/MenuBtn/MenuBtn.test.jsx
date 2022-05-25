/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import MenuBtn from './MenuBtn';

describe('test MenuBtn', () => {
  test('render component MenuBtn', async () => {
    let root;
    act(() => {
      root = create(
        <Router>
          <MenuBtn />
        </Router>,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
});
