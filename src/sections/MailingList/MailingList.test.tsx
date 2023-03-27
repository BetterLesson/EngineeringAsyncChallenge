/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import MailingList from './MailingList';
import { act } from 'react-dom/test-utils';

describe('MailingList', () => {
  it('shows error message when Full Name is empty or only one name is submitted', async () => {
    render(<MailingList />);

    const enteredEmail = 'test@gmail.com';
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /sign up/i });

    act(() => {
      user.type(emailInput, enteredEmail);
      user.click(submitButton);
    });

    const error = screen.getByText(/Please enter first and last name/i);
    expect(error).toBeInTheDocument();
  });

  it('shows error message when email empty', async () => {
    render(<MailingList />);

    const enteredName = 'Karl Cereno';
    const fullNameInput = screen.getByLabelText(/full name/i);
    const submitButton = screen.getByRole('button', { name: /sign up/i });

    act(() => {
      user.type(fullNameInput, enteredName);
      user.click(submitButton);
    });

    const error = screen.getByText(/Please enter a valid email address/i);
    expect(error).toBeInTheDocument();
  });

  it('shows error message when full name and email are empty', async () => {
    render(<MailingList />);

    const submitButton = screen.getByRole('button', { name: /sign up/i });

    act(() => {
      user.click(submitButton);
    });

    const error = screen.getByText(
      /Please enter a valid full name and email address/i
    );
    expect(error).toBeInTheDocument();
  });

  it('shows success message when form is submitted', async () => {
    render(<MailingList />);

    const enteredName = 'Karl Cereno';
    const enteredEmail = 'karlcereno@gmail.com';

    const fullNameInput = screen.getByLabelText(/full name/i);
    const emailInput = screen.getByLabelText(/email/i);

    const submitButton = screen.getByRole('button', { name: /sign up/i });

    act(() => {
      user.type(fullNameInput, enteredName);
      user.type(emailInput, enteredEmail);
      user.click(submitButton);
    });

    const sucessMessage = screen.getByText(/Thank you for signing up/i);
    expect(sucessMessage).toBeInTheDocument();
  });
});
