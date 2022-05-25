/* eslint-disable no-undef */
import React from 'react';
import { act, create } from 'react-test-renderer';
import Staff from './Staff';

describe('test Staff', () => {
  test('render Staff', () => {
    let root;
    act(() => {
      root = create(
        <Staff />,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
});
