/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import ModalEditMenu from './ModalEditMenu';

describe('test ModalEditMenu', () => {
  test('render component ModalEditMenu', async () => {
    let root;
    act(() => {
      root = create(
        <Router>
          <ModalEditMenu />
        </Router>,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
});
