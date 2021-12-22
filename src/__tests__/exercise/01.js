// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react';
import ReactDOM from 'react-dom';
import Counter from '../../components/counter';

let root = {};

function renderComponent(Component) {
  root = document.createElement('div');
  document.body.append(root);
  ReactDOM.render(<Component />, root);
  return root;
}

function getMessageText() {
  return root.firstChild.querySelector('div').textContent;
}

function click(el) {
  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  });

  el.dispatchEvent(event);
}

describe('counter increments and decrements when the buttons are clicked', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    renderComponent(Counter);
  });

  it("should start at zero", () => {
    const message = getMessageText();
    expect(message).toBe('Current count: 0');
  });

  it("should increment", () => {
    const [, increment] = document.querySelectorAll('button');
    click(increment);

    const message = getMessageText();
    expect(message).toBe('Current count: 1');
  });

  it("should decrement", () => {
    const [decrement] = document.querySelectorAll('button');
    click(decrement);

    const message = getMessageText();
    expect(message).toBe('Current count: -1');
  });
});