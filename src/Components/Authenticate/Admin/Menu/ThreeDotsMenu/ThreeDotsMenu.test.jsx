/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import ThreeDotsMenu from './ThreeDotsMenu';

describe('test ThreeDotsMenu', () => {
  test('render component ThreeDotsMenu', async () => {
    let root;
    act(() => {
      root = create(
        <Router>
          <ThreeDotsMenu />
        </Router>,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
  test('Click button', async () => {
    const mockOnClick = jest.fn();
    const mockSetAnchorEl = jest.fn();
    render(
      <Router>
        <ThreeDotsMenu
          onClick={mockOnClick}
          setAnchorEl={mockSetAnchorEl}
        />
      </Router>,
    );
    const button = screen.getByRole(/button/i);
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
