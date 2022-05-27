/* eslint-disable no-promise-executor-return */
/* eslint-disable no-undef */
import {
  render, screen, waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
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
    screen.getByText(/Error correo o contraseña invalida/i);
  });

  test('When signIn promise is resolved signIn mock should be called', async () => {
    const signIn = jest.fn();
    render(
      <MemoryRouter initialEntries={[{ pathname: '/LogIn' }]}>
        <LogIn signIn={signIn} />
      </MemoryRouter>,
    );

    userEvent.type(screen.getByPlaceholderText(/Contraseña/i), 'D123@devs');
    userEvent.type(screen.getByPlaceholderText(/Ejemplo@gmail.com/i), 'sara@gmail.com');
    userEvent.click(screen.getByText(/Iniciar sesión/i));
    await waitFor(() => {
      expect(signIn).toHaveBeenCalledTimes(1);
    });
  });

  test('When signIn promise is rejected a error message should be displayed', async () => {
    const signIn = jest.fn(() => Promise.reject());
    render(
      <MemoryRouter initialEntries={[{ pathname: '/LogIn' }]}>
        <LogIn signIn={signIn} />
      </MemoryRouter>,
    );

    userEvent.type(screen.getByPlaceholderText(/Contraseña/i), 'D123@devs');
    userEvent.type(screen.getByPlaceholderText(/Ejemplo@gmail.com/i), 'sara@gmail.com');
    userEvent.click(screen.getByText(/Iniciar sesión/i));
    await waitFor(() => {
      screen.getByText(/Error del servidor/i);
    });
  });
});
