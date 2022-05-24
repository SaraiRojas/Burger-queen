/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import Staff from './Staff';

describe('test Staff', () => {
  test('render component Staff', async () => {
    let root;
    act(() => {
      root = create(
        <Router>
          <Staff />
        </Router>,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
});
