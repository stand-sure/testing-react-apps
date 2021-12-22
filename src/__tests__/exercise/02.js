// simple test with React Testing Library
// http://localhost:3000/counter

import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../../components/counter';

describe('counter increments and decrements when the buttons are clicked', () => {
  let decrement;
  let increment;
  let message;

  beforeEach(() => {
    const { container } = render(<Counter />);
    [decrement, increment] = container.querySelectorAll('button');
    message = container.firstChild.querySelector('div');
  });

  function validateMessage(count) {
    count = `Current count: ${count}`;
    expect(message).toHaveTextContent(count);
  }

  it("should start at zero", () => {
    validateMessage(0);
  });

  it("should increment the count when the increment button is clicked", () => {
    fireEvent.click(increment);
    validateMessage(1);
  });

  it("should decrement the count when the decrement button is clicked", () => {
    fireEvent.click(decrement);
    validateMessage(-1);
  });
});
