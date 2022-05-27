/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import PrivateRoute from './PrivateRoute';

describe('test PrivateRouter', () => {
  const mockAuthenticate = jest.fn();
  test('render PrivateRouter', async () => {
    let root;
    act(() => {
      root = create(
        <Router>
          <PrivateRoute authenticate={mockAuthenticate} />
        </Router>,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
  test('render conditional PrivateRouter', async () => {
    let value = 'Admin';
    const { rerender } = render(
      <Router>
        <PrivateRoute role={value} authenticate={mockAuthenticate} />
      </Router>,
    );
    expect(screen.getByText(/Inicia sesión para administar el staff y menús o para tomar la orden de los clientes./i)).toBeInTheDocument();
    value = 'Mesero';
    rerender(
      <Router>
        <PrivateRoute role={value} authenticate={mockAuthenticate} />
      </Router>,
    );
    value = 'Jefe de cocina';
    rerender(
      <Router>
        <PrivateRoute role={value} authenticate={mockAuthenticate} />
      </Router>,
    );
  });
});
