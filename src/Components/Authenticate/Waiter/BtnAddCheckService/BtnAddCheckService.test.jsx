/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { act, create } from 'react-test-renderer';
import BtnAddCheckService from './BtnAddCheckService';

describe('Test BtnAddCheckService', () => {
  const mockOrder = jest.fn();
  test('test render BtnAddCheckService', () => {
    let root;
    act(() => {
      root = create(
        <BtnAddCheckService order={mockOrder} />,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });

  test('test handleClick', async () => {
    const mockOnClick = jest.fn();
    render(<BtnAddCheckService order={mockOrder} onClick={mockOnClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
