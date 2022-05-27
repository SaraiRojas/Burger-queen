/* eslint-disable no-undef */
import React from 'react';
import { act, create } from 'react-test-renderer';
import ServeOrders from './ServeOrders';

describe('test ServeOrders', () => {
  test('render ServeOrder', () => {
    let root;
    act(() => {
      root = create(
        <ServeOrders />,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
});
