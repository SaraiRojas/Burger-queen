/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  test('handleClick', () => {
    const mockOnclick = jest.fn();
    render(<ShoppingCar onClick={mockOnclick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockOnclick).toHaveBeenCalledTimes(1);
  });

  test('handleClick', () => {
    const mockOnclick = jest.fn();
    render(<ShoppingCar open onClick={mockOnclick} />);
    userEvent.type(screen.getByRole('button'), 'Cancelar');
    // fireEvent.click(button);
    expect(mockOnclick).toHaveBeenCalledTimes(1);
  });
});
