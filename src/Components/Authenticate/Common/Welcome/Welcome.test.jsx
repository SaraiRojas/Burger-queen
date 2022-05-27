/* eslint-disable no-undef */
import React from 'react';
import { create, act } from 'react-test-renderer';
import Welcome from './Welcome';

describe('test Welcome', () => {
  test('render component welcome', async () => {
    let root;
    act(() => {
      root = create(
        <Welcome />,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
});
