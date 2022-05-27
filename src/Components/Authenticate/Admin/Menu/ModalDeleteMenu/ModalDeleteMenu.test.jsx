/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import ModalDeleteMenu from './ModalDeleteMenu';

describe('test ModalDeleteMenu', () => {
  test('render component ModalDeleteMenu', async () => {
    let root;
    act(() => {
      root = create(
        <Router>
          <ModalDeleteMenu />
        </Router>,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
  test('Click button', async () => {
    const mockOnClose = jest.fn();
    render(
      <Router>
        <ModalDeleteMenu
          openModalDelete={true}
          setOpenModalDelete={mockOnClose}
        />
      </Router>,
    );
    const button = screen.getByText(/No/i);
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
