// form testing
// http://localhost:3000/login

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import faker from "faker";
import { build, fake } from "@jackfranklin/test-data-bot";
import Login from '../../components/login';

const PASSWORD_LENGTH = 18;

const buildLoginForm = build('Login', {
  fields: {
    username: fake(f => f.name.findName()),
    password: fake(f => f.random.alphaNumeric(PASSWORD_LENGTH)),
  }
});

test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn();
  render(<Login onSubmit={handleSubmit} />);

  const usernameInput = screen.getByRole('textbox', { name: /username/i });
  const passwordInput = screen.getByLabelText(/password/i);

  const overrides = {};
  const { username, password } = buildLoginForm({ overrides });
  userEvent.type(usernameInput, username);
  userEvent.type(passwordInput, password);

  userEvent.click(screen.getByRole("button", { name: /submit/i }));
  expect(handleSubmit).toHaveBeenCalledWith({ username, password });
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
