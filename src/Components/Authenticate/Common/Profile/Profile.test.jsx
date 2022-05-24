/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import Profile from './Profile';

describe('test Profile', () => {
  const mockAuthenticate = jest.fn();
  test('render component Profile', async () => {
    let root;
    act(() => {
      root = create(
        <Router>
          <Profile authenticate={mockAuthenticate} />
        </Router>,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
  test('handle Click', async () => {
    const mockOnClick = jest.fn();
    render(
      <Router>
        <Profile authenticate={mockAuthenticate} onClick={mockOnClick} />
      </Router>,
    );
    const button = screen.getByRole(/button/i);
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
