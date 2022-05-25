/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { create, act } from 'react-test-renderer';
import BtnAddServe from './BtnAddServe';

describe('test BtnAddServe', () => {
  const mockOrder = jest.fn();
  test('render BtnAddServe', async () => {
    let root;
    act(() => {
      root = create(
        <BtnAddServe order={mockOrder} />,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });

  test('handleClick', async () => {
    const mockOnClick = jest.fn();
    render(<BtnAddServe order={mockOrder} onClick={mockOnClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
