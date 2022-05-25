/* eslint-disable no-undef */
import React from 'react';
import { act, create } from 'react-test-renderer';
import Orders from './Orders';

describe('test Orders', () => {
  test('render Orders', () => {
    let root;
    act(() => {
      root = create(
        <Orders />,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
});
