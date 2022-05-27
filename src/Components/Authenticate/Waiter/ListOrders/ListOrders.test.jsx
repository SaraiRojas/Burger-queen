/* eslint-disable no-undef */
import React from 'react';
import { act } from 'react-dom/test-utils';
import { create } from 'react-test-renderer';
import ListOrders from './ListOrders';

describe('test ListOrders', () => {
  test('render ListOrder', () => {
    let root;
    act(() => {
      root = create(
        <ListOrders />,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
});
