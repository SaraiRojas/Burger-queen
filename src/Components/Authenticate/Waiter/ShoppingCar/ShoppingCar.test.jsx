/* eslint-disable no-undef */
import React from 'react';
import { act, create } from 'react-test-renderer';
import ShoppingCar from './ShoppingCar';

describe('test ServeOrders', () => {
  test('render ServeOrder', () => {
    let root;
    act(() => {
      root = create(
        <ShoppingCar />,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
});
