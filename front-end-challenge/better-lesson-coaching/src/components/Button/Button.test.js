import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {

  test('renders the button with the passed in text', () => {
    render(<Button text="Click Me" />);

    const button = screen.getByTestId('button');
    expect(button.textContent).toEqual('Click Me');
  });

  test('calls the callback when clicked', () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick} />);

    const button = screen.getByTestId('button');
    button.click();

    expect(onClick).toBeCalledTimes(1);
  });
})
