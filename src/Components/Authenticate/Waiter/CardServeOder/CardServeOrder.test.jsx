/* eslint-disable no-undef */
import React from 'react';
import { create, act } from 'react-test-renderer';
import CardServeOrder from './CardServeOrder';

describe('test CardServeOrder', () => {
  test('render CardServeOrder', () => {
    const mockOrder = jest.fn();
    let root;
    act(() => {
      root = create(
        <CardServeOrder order={mockOrder} />,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
});
