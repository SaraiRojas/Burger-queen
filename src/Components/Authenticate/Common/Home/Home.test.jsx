/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import Home from './Home';

describe('test Home', () => {
  const mockAuthenticate = jest.fn();
  test('render component Home', async () => {
    let root;
    act(() => {
      root = create(
        <Router>
          <Home authenticate={mockAuthenticate} />
        </Router>,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
  test('render component header', async () => {
    const value = 'Mesero';
    render(
      <Router>
        <Home role={value} authenticate={mockAuthenticate} />
      </Router>,
    );
    const button = screen.getByText(/Menu Desayuno/i);
    expect(button).toBeInTheDocument();
  });
});
