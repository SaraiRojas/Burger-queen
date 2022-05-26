/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create, act } from 'react-test-renderer';
import Header from './Header';

describe('test header', () => {
  const mockAuthenticate = jest.fn();
  test('render component header', async () => {
    let root;
    act(() => {
      root = create(
        <Router>
          <Header authenticate={mockAuthenticate} />
        </Router>,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
  test('render component header', async () => {
    const value = 'Mesero';
    const pathname = '/home/menu';
    render(
      <Router>
        <Header role={value} authenticate={mockAuthenticate} location={pathname} />
      </Router>,
    );
    // const button = screen.getByRole('button', { haspopup: 'true' });
    // expect(button).toBeInTheDocument();
  });
});
