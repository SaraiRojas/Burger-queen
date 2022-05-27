/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { create, act } from 'react-test-renderer';
import Sidebar from './Sidebar';

describe('test Sidebar', () => {
  const mockOnClick = jest.fn();
  test('render component Sidebar', async () => {
    let root;
    act(() => {
      root = create(
        <Router>
          <Sidebar onClick={mockOnClick} />
        </Router>,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
  test('render conditional Sidebar', async () => {
    let value = 'Admin';
    const { rerender } = render(
      <Router>
        <Sidebar role={value} onClick={mockOnClick} />
      </Router>,
    );
    expect(screen.getByText(/Empleados/i)).toBeInTheDocument();
    // userEvent.click(screen.getByText('/staff'));

    value = 'Mesero';
    rerender(
      <Router>
        <Sidebar role={value} onClick={mockOnClick} />
      </Router>,
    );
    expect(screen.getByText(/Menu Almuerzo/i)).toBeInTheDocument();
    value = 'Jefe de cocina';
    rerender(
      <Router>
        <Sidebar role={value} onClick={mockOnClick} />
      </Router>,
    );
    expect(screen.getByText(/Servir/i)).toBeInTheDocument();
  });
  test('render component Sidebar click in goToHome', async () => {
    const value = 'Admin';
    render(
      <Router>
        <Sidebar role={value} onClick={mockOnClick} />
      </Router>,
    );
    const image = screen.getByRole(/img/i);
    fireEvent.click(image);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
