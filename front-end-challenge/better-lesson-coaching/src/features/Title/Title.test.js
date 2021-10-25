import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Title Component', () => {

  test('renders the BetterLesson title and logo', () => {
    render(<Title />);

    const titles = screen.getAllByTestId('title');
    expect(titles.map(title => title.textContent)).toEqual([
      'BetterLesson',
      'Professional Coaching',
      'Professional Coach Seminars & Mentorship',
    ]);

    const titleLogo = screen.getByTestId('title-logo');
    expect(titleLogo).toBeTruthy();
  });

  test('scrolls to the bottom of the page when the Register Now button is clicked', () => {
    window.scrollTo = jest.fn();
    render(<Title />);

    const button = screen.getByTestId('button');
    expect(button.textContent).toEqual('Register Now');

    button.click();
    expect(window.scrollTo).toBeCalledWith({ top: 0, behavior: 'smooth' });
  });
})
