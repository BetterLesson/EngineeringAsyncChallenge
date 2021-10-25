import { fireEvent, render, screen } from '@testing-library/react';
import MailingListForm from './MailingListForm';

describe('MailingListForm Component', () => {

  test('renders the form', () => {
    render(<MailingListForm />);

    const formTitle = screen.getByTestId('form-title');
    expect(formTitle.textContent).toEqual('Join Our Listing Mail');

    const formText = screen.getByTestId('form-text');
    expect(formText.textContent).toEqual('Join our mailing to recieve notifications about program availability and special discounts');

    expect(screen.queryByTestId('form-success')).toBeFalsy();
  });

  test('updates the name input on change', () => {
    render(<MailingListForm />);

    const nameInput = screen.getByTestId('name-input');
    expect(nameInput.getAttribute('value')).toEqual('');

    fireEvent.change(nameInput, { target: { name: 'fullName', value: 'hello' } });
    expect(nameInput.getAttribute('value')).toEqual('hello');
  });

  test('updates the email input on change', () => {
    render(<MailingListForm />);

    const emailInput = screen.getByTestId('email-input');
    expect(emailInput.getAttribute('value')).toEqual('');

    fireEvent.change(emailInput, { target: { name: 'email', value: 'hello' } });
    expect(emailInput.getAttribute('value')).toEqual('hello');
  });

  test('updates the industry dropdown on change', () => {
    render(<MailingListForm />);

    const industryDropdown = screen.getByTestId('industry-dropdown');
    const options = screen.getAllByTestId('option');

    expect(options.map(option => option.selected)).toEqual([
      true, 
      false, 
      false,
    ]);

    fireEvent.change(industryDropdown, { target: { name: 'industry', value: 'Professional Services' } });

    expect(options.map(option => option.selected)).toEqual([
      false, 
      true, 
      false,
    ]);
  });

  test('shows errors on submit with no values', () => {
    render(<MailingListForm />);

    expect(screen.queryAllByTestId('form-error')).toHaveLength(0);
    const button = screen.getByTestId('button');
    button.click();

    const formErrors = screen.getAllByTestId('form-error');
    expect(formErrors.map(error => error.textContent)).toEqual([
      'Please Enter a Valid Name',
      'Please Enter a Valid Email',
    ]);
  });

  test('submits the form on successful inputs', () => {
    console.log = jest.fn();

    render(<MailingListForm />);

    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');

    fireEvent.change(nameInput, { target: { name: 'fullName', value: 'A Name' } });
    fireEvent.change(emailInput, { target: { name: 'email', value: 'email@address.com' } });
    
    const button = screen.getByTestId('button');
    button.click();

    expect(console.log).toBeCalledWith({
      email: 'email@address.com',
      fullName: 'A Name',
      industry: 'E-Sports',
    });

    expect(screen.queryByTestId('form-success').textContent).toEqual('Form Has Been Successfully Submitted✓');
  });
});