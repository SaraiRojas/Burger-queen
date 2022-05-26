/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import ModalStaff from './ModalStaff';

describe('test ModalStaff', () => {
  test('render component ModalStaff', async () => {
    let root;
    act(() => {
      root = create(
        <Router>
          <ModalStaff />
        </Router>,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
  test('Click button', async () => {
    render(
      <Router>
        <ModalStaff open />
      </Router>,
    );
    // screen.debug();
    userEvent.type(screen.getByText('Roles'), 'Mesero');
    userEvent.type(screen.getByText('Nombre'), 'laura');
    userEvent.type(screen.getByText('Email'), 'skar@gmail.com');
    userEvent.type(screen.getByText('Contraseña'), 'D123@devs');
    userEvent.type(screen.getByText('Confirmar contraseña'), 'D123@devs');
  });
});
