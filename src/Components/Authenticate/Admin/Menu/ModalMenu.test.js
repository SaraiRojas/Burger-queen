/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import ModalMenu from './ModalMenu';

describe('test ModalMenu', () => {
  test('render component ModalMenu', async () => {
    let root;
    act(() => {
      root = create(
        <Router>
          <ModalMenu />
        </Router>,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
});
