/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LogIn from './LogIn';

describe('Login', () => {
  test('When password is not equal to a matching pattern a error message should be displayed', async () => {
    render(
      <Router>
        <LogIn />
      </Router>,
    );

    userEvent.type(screen.getByPlaceholderText(/Contraseña/i), '1234');
    userEvent.type(screen.getByPlaceholderText(/Ejemplo@gmail.com/i), 'sara@correo.com');
    userEvent.click(screen.getByText(/Iniciar sesión/i));
    screen.debug();
    screen.getByText(/Error correo o contraseña invalida/i);
  });

  test('handleLogIn should be called once', async () => {
    const mockOnclick = jest.fn();
    render(
      <Router>
        <LogIn onClick={mockOnclick} />
      </Router>,
    );

    userEvent.type(screen.getByPlaceholderText(/Contraseña/i), 'D123@devs');
    userEvent.type(screen.getByPlaceholderText(/Ejemplo@gmail.com/i), 'sara@correo.com');
    const button = screen.getByText(/Iniciar sesión/i);
    fireEvent.click(button);
    expect(mockOnclick).toHaveBeenCalledTimes(1);
  });
});
