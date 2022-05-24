/* eslint-disable no-undef */
// import { render, screen } from '@testing-library/react';
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
  // test('Click button', async () => {
  //   render(
  //     <Router>
  //       <ModalStaff />
  //     </Router>,
  //   );
  //   screen.debug();
  //   // const email = screen.getByRole('button', { name: 'email' });
  //   // console.log(email);
  // });
});
