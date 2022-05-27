/* eslint-disable no-undef */
// import { render, screen } from '@testing-library/react';
import React from 'react';
import { create, act } from 'react-test-renderer';
import App from './App';

describe.skip('test App', () => {
  test('render App', async () => {
    let root;
    act(() => {
      root = create(
        <App />,
      );
    });
    expect(root.toJSON()).toMatchSnapshot();
  });
});
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
