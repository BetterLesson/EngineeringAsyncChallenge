import { render, screen } from '@testing-library/react';
import CoachingExperts from '../../../scenes';

test('renders learn react link', () => {
  render(<CoachingExperts />);
  const linkElement = screen.getByText(/Contact Us/i);
  expect(linkElement).toBeInTheDocument();
});
