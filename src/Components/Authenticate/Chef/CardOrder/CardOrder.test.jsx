/* eslint-disable no-undef */
import React from 'react';
import { create, act } from 'react-test-renderer';
import CardOrder from './CardOrder';

describe(('test CardOrder'), () => {
  const mockCardOrder = jest.fn();
  test('render CardOrder', () => {
    let root;
    act(() => {
      root = create(
        <CardOrder order={mockCardOrder} />,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
});
