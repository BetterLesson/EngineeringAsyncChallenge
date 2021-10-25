import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact Component', () => {

  test('renders the table with the proper headers and row data', () => {
    render(<Contact />);

    const contactHeaders = screen.getAllByTestId('contact-header');
    expect(contactHeaders.map(header => header.textContent)).toEqual([
      'Email Address',
      'Mailing Address',
      'Phone Number',
    ]);

    const contactValues = screen.getAllByTestId('contact-value');
    expect(contactValues.map(header => header.textContent)).toEqual([
      'hello@reallygreatsite.com',
      '123 Anywhere St. Any City, ST 12345',
      '(123) 456 7890',
    ]);
  });

})