// Avoid implementation details
// http://localhost:3000/counter

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from '../../components/counter';

describe('counter increments and decrements when the buttons are clicked', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  function validateMessage(count) {
    const slug = "Current count:";
    const message = screen.getByText(new RegExp(slug, "i"));
    expect(message).toHaveTextContent(`${slug} ${count}`);
  }

  it('should start at zero', () => {
    validateMessage(0);
  });

  it('should increment the count when the increment button is clicked', () => {
    const increment = screen.getByRole("button", { name: /increment/i });
    userEvent.click(increment);

    validateMessage(1);
  });

  it('should decrement the count when the decrement button is clicked', () => {
    const decrement = screen.getByRole("button", { name: /decrement/i});
    userEvent.click(decrement);

    validateMessage(-1);
  });
});
